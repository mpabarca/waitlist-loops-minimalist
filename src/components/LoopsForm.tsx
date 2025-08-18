/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const INIT = "INIT";
const SUBMITTING = "SUBMITTING";
const ERROR = "ERROR";
const SUCCESS = "SUCCESS";

type FormState = "INIT" | "SUBMITTING" | "ERROR" | "SUCCESS";

const formStyles = {
  id: import.meta.env.VITE_LOOPS_FORM_ID,
  name: "Default",
  formStyle: "buttonBelow", // or "inline"
  placeholderText: "you@example.com",
  formFont: "inter", // match Tailwind class
  formFontColor: "#000000",
  formFontSizePx: 14,
  buttonText: "Join Waitlist",
  buttonFont: "inter",
  buttonFontColor: "#ffffff",
  buttonColor: "#000000",
  buttonFontSizePx: 14,
  successMessage: "Thanks! We'll be in touch!",
  successFont: "inter",
  successFontColor: "#000000",
  successFontSizePx: 14,
  userGroup: "",
};

const domain = "app.loops.so";

export default function LoopsForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>(INIT);
  const [errorMessage, setErrorMessage] = useState("");
  // TODO: setFields will be used once additional fields are added
  // const [fields, setFields] = useState<
  //   Record<string, string | number | boolean>
  // >({});
  const fields: Record<string, string | number | boolean> = {};

  /**
   * Rate limit the number of submissions allowed
   * @returns {boolean} true if the form has been successfully submitted in the past minute
   */
  const resetForm = () => {
    setEmail("");
    setFormState(INIT);
    setErrorMessage("");
  };

  const hasRecentSubmission = () => {
    const timestamp = new Date().valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (previousTimestamp && Number(previousTimestamp) + 60_000 > timestamp) {
      setFormState(ERROR);
      setErrorMessage("Too many signups, please try again in a little while");
      return true;
    }

    localStorage.setItem("loops-form-timestamp", timestamp.toString());
    return false;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formState !== INIT) return;

    if (!isValidEmail(email)) {
      setFormState(ERROR);
      setErrorMessage("Please enter a valid email");
      return;
    }

    if (hasRecentSubmission()) return;

    setFormState(SUBMITTING);

    const additionalFields = Object.entries(fields).reduce(
      (acc, [key, val]) => {
        if (val) {
          return acc + "&" + key + "=" + encodeURIComponent(val);
        }
        return acc;
      },
      ""
    );

    const formBody = `userGroup=${encodeURIComponent(
      formStyles.userGroup
    )}&email=${encodeURIComponent(email)}&mailingLists=`;

    fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
      method: "POST",
      body: formBody + additionalFields,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res: any) => [res.ok, res.json(), res])
      .then(([ok, dataPromise, res]) => {
        if (ok) {
          resetForm();
          setFormState(SUCCESS);
        } else {
          dataPromise.then((data: any) => {
            setFormState(ERROR);
            setErrorMessage(data.message || res.statusText);
            localStorage.setItem("loops-form-timestamp", "");
          });
        }
      })
      .catch((error) => {
        setFormState(ERROR);
        if (error.message === "Failed to fetch") {
          setErrorMessage(
            "Too many signups, please try again in a little while"
          );
        } else if (error.message) {
          setErrorMessage(error.message);
        }
        localStorage.setItem("loops-form-timestamp", "");
      });
  };

  const isInline = formStyles.formStyle === "inline";

  switch (formState) {
    case SUCCESS:
      return (
        <div className='flex items-center justify-center w-full'>
          <p
            className={`text-[${formStyles.successFontSizePx}px] text-[${formStyles.successFontColor}] font-[${formStyles.successFont}]`}
          >
            {formStyles.successMessage}
          </p>
        </div>
      );

    case ERROR:
      return (
        <>
          <SignUpFormError />
          <BackButton />
        </>
      );

    default:
      return (
        <>
          <form
            onSubmit={handleSubmit}
            className={`flex text-sm gap-1 ${
              isInline ? "flex-row space-x-2" : "flex-col space-y-2"
            } items-center justify-center w-full`}
          >
            <input
              type='text'
              name='email'
              placeholder={formStyles.placeholderText}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full max-w-[300px] min-w-[100px] rounded-md border border-gray-300 bg-white px-3 py-2 text-[${formStyles.formFontSizePx}px] text-[${formStyles.formFontColor}] font-[${formStyles.formFont}] shadow-sm focus:outline-none focus:ring-2 focus:ring-black`}
            />
            {/* <input
              name='company'
              onChange={(e) =>
                setFields((prev) => ({ ...prev, company: e.target.value }))
              }
            /> */}
            {/* Hidden honeypot */}
            <div aria-hidden='true' className='absolute left-[-2024px]'></div>
            <SignUpFormButton />
          </form>
        </>
      );
  }

  function SignUpFormError() {
    return (
      <div className='flex items-center justify-center w-full'>
        <p className='text-red-700 font-sans'>
          {errorMessage || "Oops! Something went wrong, please try again"}
        </p>
      </div>
    );
  }

  function BackButton() {
    return (
      <button
        onClick={resetForm}
        className="relative text-gray-500 mt-2 mx-auto text-center bg-transparent border-none cursor-pointer transition-all duration-300 ease-in-out
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.2px] after:bg-gray-700
        hover:after:w-full after:transition-all after:duration-300 after:ease-in-out hover:text-gray-700"
      >
        &larr; Back
      </button>
    );
  }

  function SignUpFormButton({ props }: any) {
    return (
      <button
        type='submit'
        className={`w-full max-w-[300px] h-[38px] rounded-md px-4 py-2 bg-black text-white hover:bg-black/80 cursor-pointer text-[${
          formStyles.buttonFontSizePx
        }px] font-[${formStyles.buttonFont}] text-[${
          formStyles.buttonFontColor
        }] bg-[${formStyles.buttonColor}] shadow-sm ${
          isInline ? "w-auto whitespace-nowrap" : ""
        }`}
        {...props}
      >
        {formState === SUBMITTING ? "Please wait..." : formStyles.buttonText}
      </button>
    );
  }
}

function isValidEmail(email: any) {
  return /.+@.+/.test(email);
}
