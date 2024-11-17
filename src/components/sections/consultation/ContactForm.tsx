import Image from "next/image";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import contactApiRequest from "@/backend/api_requests/contact/contactRequest";
import {
  ComponentStateEnum,
  ComponentStateEnumValues,
} from "@/backend/models/_shared";
import PrimaryButton from "@/components/button/PrimaryButton";

export default function ContactSection() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const menuItems = [
    "Network Solutions",
    "Windows Services",
    "Cloud & Hybrid Services",
    "Unified Communications",
    "Managed Security Services",
    "Other",
  ];

  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");
  const [interest, setinterest] = useState<string | null>(null);
  const [showError, setshowError] = useState(false);
  const [showSuccess, setshowSuccess] = useState<ComponentStateEnumValues>(
    ComponentStateEnum.IDLE
  );

  function resetForm() {
    setname("");
    setmessage("");
    setemail("");
    setinterest(null);
  }

  const handleNameChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setname(event.target.value);
  };

  const handleEmailChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setemail(event.target.value);
  };

  const handleMessageChange = (event: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) => {
    event.preventDefault();
    setmessage(event.target.value);
  };

  const handleInterestChange = (event: any) => {
    setinterest(event);
  };

  async function handleSubmit() {
    setshowError(false);
    setshowSuccess("loading");

    if (!name || !email || !message || !interest) {
      setshowError(true);
      setshowSuccess("idle");
      return;
    }

    let dataPayload = {
      name,
      email,
      message,
      interest,
    };

    let dataResponse = await contactApiRequest(dataPayload);

    if (dataResponse === "success") {
      console.log("RESPONSE FROM API", dataResponse);
      //setshowSuccess("success");
      resetForm();
      toast.success("Your contact enquiry has been submitted successfully", {
        style: {
          borderRadius: "0px",
        },
      });
    } else {
      console.log("RESPONSE FROM API", dataResponse);
      setshowSuccess("failed");
      toast.error("Your contact enquiry failed on submission", {
        style: {
          borderRadius: "0px",
        },
      });
    }
  }

  return (
    <div className="bg-th-primary-dark">
      <div className="relative bg-th-primary-dark w-full flex flex-col items-center gap-8 max-w-[1200px] xl:mx-auto py-36 px-3 md:px-12 lg:px-12">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className={` text-sm mb:text-base mb-2 text-white`}
            >
              Name*
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              name="fullName"
              type="text"
              className={` bg-[#DEEBF4] w-full px-5 text-base  py-4 placeholder-[#3F7295]
              border-th-textbox-fill focus:ring-transparent 
              focus:border-th-container-on-surface rounded-sm`}
              ref={nameRef}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className={` text-sm mb:text-base mb-2 text-white`}
            >
              Email*
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              name="email"
              type="email"
              className={`bg-[#DEEBF4] w-full px-5 text-base md:text-base py-4 placeholder-[#3F7295]
              border-th-textbox-fill focus:ring-transparent 
              focus:border-th-container-on-surface rounded-sm`}
              ref={emailRef}
              placeholder="Enter your email"
            />
          </div>

          {/* Your Interests */}
          <div className="flex flex-col">
            <label
              htmlFor="interest"
              className={` text-sm md:text-base mb-2 text-white`}
            >
              Your Interest*
            </label>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button
                  className={` text-left bg-[#DEEBF4] w-full px-5 text-base md:text-base py-4  ${
                    !interest ? "text-[#3F7295]" : "text-black"
                  } rounded-sm flex justify-between items-center`}
                >
                  {!interest ? "Select your interest" : interest}
                  <div
                    className={`w-6 h-6 bg-th-accent-medium flex flex-col items-center justify-center
                      rounded-full transition-all duration-300`}
                  >
                    {/* //TODO 
                    <Image
                      src="/assets/icons/chevron_down.svg"
                      height={11}
                      width={11}
                    /> */}
                  </div>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-300 origin-top-right divide-y rounded-sm bg-white shadow-lg">
                  <div className=" ">
                    {menuItems.map((value) => (
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => handleInterestChange(value)}
                            className={`${
                              active
                                ? "bg-th-primary-medium text-white"
                                : "text-gray-900"
                            }  text-md group flex w-full items-center rounded-sm p-4`}
                          >
                            {value}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className={` text-sm md:text-base mb-2 text-white`}
            >
              Message*
            </label>
            <textarea
              value={message}
              onChange={handleMessageChange}
              name="message"
              className={`min-h-[auto] bg-[#DEEBF4] w-full px-5 text-base md:text-base py-4 placeholder-[#3F7295]
              border-th-textbox-fill focus:ring-transparent 
              focus:border-th-container-on-surface rounded-sm`}
              rows={7}
              ref={messageRef}
              placeholder="Provide additional information"
            />
          </div>

          {/* Submit Button */}
          <PrimaryButton rounded onClicked={() => {}} title={"Submit"} />
        </div>
      </div>
    </div>
  );
}
