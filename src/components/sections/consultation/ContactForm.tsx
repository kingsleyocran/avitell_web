import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  ComponentStateEnum,
  ComponentStateEnumValues,
} from "@/backend/models/_shared";
import PrimaryButton from "@/components/button/PrimaryButton";
import ArrowDownIcon from "../../../../public/assets/icons/menu_arrow_up.svg";
import { contactContent } from "@/utils/content";
import TextOpacityInViewAnimation from "@/components/animation/TextOpacityInViewAnimation";
import emailjs from "@emailjs/browser";

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
  const [componentState, setComponentState] =
    useState<ComponentStateEnumValues>(ComponentStateEnum.IDLE);

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
    setComponentState("loading");

    if (!name || !email || !message || !interest) {
      toast.error("Please make sure your form is filled correctly");
      setComponentState("idle");
      return;
    }

    // EmailJS template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      interest: interest,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
        }
      );
      console.log("Email sent successfully");
      setComponentState("idle");
      resetForm();
      toast.success("Your contact enquiry has been submitted successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      setComponentState("failed");
      toast.error("Your contact enquiry failed on submission");
    }
  }

  return (
    <div className="bg-th-primary-dark ">
      <div className="relative bg-th-primary-dark w-full flex  items-center gap-8 max-w-[1200px] xl:mx-auto py-24 md:py-36 px-6 md:px-12 lg:px-12">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-24">
          <div
            className="px-6 md:px-0 flex-1 md:h-full flex flex-col items-center md:items-start
          justify-center gap-1 md:gap-4"
          >
            <h1 className="text-white text-2xl md:text-2xl lg:text-2xl ">
              <TextOpacityInViewAnimation
                phrases={[contactContent.formTitle]}
                animationDelay={0.5}
                extraClassNames="text-center md:text-start"
              />
            </h1>

            <p className="text-white text-opacity-60">
              <TextOpacityInViewAnimation
                phrases={[contactContent.formText]}
                animationDelay={0.7}
                extraClassNames="text-center md:text-start"
              />
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-6">
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
                      className={`w-6 rotate-180 h-6 bg-th-accent-medium flex flex-col items-center justify-center
                      rounded-full transition-all duration-300`}
                    >
                      <ArrowDownIcon width="10" height="8" viewBox="0 0 12 9" />
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
            <PrimaryButton
              rounded
              onClicked={handleSubmit}
              title={
                componentState === ComponentStateEnum.LOADING
                  ? "Sending..."
                  : "Submit"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
