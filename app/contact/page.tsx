"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { sendEmail } from '../api/sendEmail/sendEmail'






export default function Home() {
  const router = useRouter();
  const [inputs, setInputs] = useState({});
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('');



  const handleChange = (e: any) => {
    if (e.target.name == "phone") {
      const numericValue = e.target.value.replace(/[^0-9]/g, '');
      setValue(numericValue);
    }

    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };




  return (
    <>


      <div className="mt-[9em]">
        <div className="container-xl">
          <br />
          <h4 className="text-4xl font-bold text-center text-[#2c5668] " style={{ textAlign: "center" }}>GET IN TOUCH</h4>

        </div>
      </div>
<div className="container-xl mt-5">
  <div>
    <div className="pl-5 pt-4 pr-5">
      <form action={async formData => { await sendEmail(formData); }}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group row">
              <div className="col-sm-12">
                <input
                  className="form-control"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                  style={{ border: "1px solid #2c5668" }}
                />
              </div>
            </div>

            <div className="form-group row pt-2">
              <div className="col-sm-12">
                <input
                  className="form-control"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                  style={{ border: "1px solid #2c5668" }}
                />
              </div>
            </div>

            <div className="form-group row pt-2">
              <div className="col-sm-12">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  style={{ border: "1px solid #2c5668" }}
                />
              </div>
            </div>

            <div className="form-group row pt-2">
              <div className="col-sm-12">
                <input
                  className="form-control"
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={value}
                  onChange={handleChange}
                  required
                  style={{ border: "1px solid #2c5668" }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group row">
              <div className="col-sm-12">
                <textarea
                  className="form-control form-control-text-area"
                  name="message"
                  placeholder="Message"
                  rows={9}
                  required
                  onChange={handleChange}
                  defaultValue={""}
                  style={{ border: "1px solid #2c5668" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-group row pt-2">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <button type="submit" className="klaviyo_submit_button" style={{ padding: "1.5em" }}>
              Send
            </button>
          </div>
          <div className="col-md-5"></div>
        </div>
        <br />
      </form>
    </div>
  </div>
</div>

      <div className="clearfix" />


      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-[#2c5668] mb-8">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          {/* Online Location */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2c5668] mb-2">Online</h3>
            <p className='myBlack'>Meet us online from the comfort of your house.</p>
            <a href="/contact">
              <button
                className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
              >
                Whatsapp
              </button>
            </a>
          </div>

          {/* Badaro Location */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2c5668] mb-2">Badaro (Lebanon)</h3>
            <p className='myBlack'>1st Floor, Labban Building,<br />Nahass Street, Badaro, Lebanon</p>
            <a href="/contact">
              <button
                className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
              >
                Directions
              </button>
            </a>
          </div>

          {/* Jdeideh Location */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2c5668] mb-2">Jdeideh (Lebanon)</h3>
            <p className='myBlack'>2nd Floor, Shaya & Azar Building,<br />Pierre Amine Gemayel Road, Jdeideh, Lebanon</p>
            <a href="/contact">
              <button
                className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
              >
                Directions
              </button>
            </a>
          </div>

          {/* Byblos Location */}
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-[#2c5668] mb-2">Byblos (Lebanon)</h3>
            <p className='myBlack'>3rd Floor, Al Harf Center,<br />Voie 13, Byblos, Lebanon</p>
            <a href="/contact">
              <button
                className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
              >
                Directions
              </button>
            </a>
          </div>
        </div>
      </section>

      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  .form-control{\n  border: 1px solid rgb(44, 86, 104) !important;\n}\n"
  }}
/>


    </>

  )
}
