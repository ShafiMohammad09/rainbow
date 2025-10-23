import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Copy, Pencil, ChevronDown } from "lucide-react";

export default function UserProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("experience");

  const userData = {
    name: "Dave Richards",
    email: "dave@mail.com",
    phone: "+91 8332883854",
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-6 pb-12">
        <div className="w-full max-w-[1216px] px-4">
          <div className="relative bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-8 mb-6">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <svg width="1090" height="205" viewBox="0 0 1090 205" className="absolute -left-32 -top-[500px]">
                <path d="M249 102C249 206.934 163.934 292 59 292C-45.9341 292 -131 206.934 -131 102C-131 -2.9341 -45.9341 -88 59 -88C163.934 -88 249 -2.9341 249 102Z" fill="#FEFAFF"/>
                <path d="M425 -437.5C722.958 -437.5 964.5 -195.958 964.5 102C964.5 399.958 722.958 641.5 425 641.5C127.042 641.5 -114.5 399.958 -114.5 102C-114.5 -195.958 127.042 -437.5 425 -437.5Z" stroke="#F0EBFF"/>
              </svg>
            </div>

            <div className="relative flex items-center gap-20">
              <div className="relative">
                <div className="w-[165px] h-[165px] rounded-full bg-brand-50 border-4 border-white shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] flex items-center justify-center">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <path d="M19.7327 46.4447C15.4884 48.972 4.36009 54.1323 11.138 60.5897C14.4489 63.744 18.1365 66 22.7726 66H49.2274C53.8635 66 57.5511 63.744 60.862 60.5897C67.6399 54.1323 56.5116 48.972 52.2673 46.4447C42.3144 40.5184 29.6856 40.5184 19.7327 46.4447Z" fill="#F0EBFF" stroke="#6834FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M49.5 19.5C49.5 26.9558 43.4558 33 36 33C28.5442 33 22.5 26.9558 22.5 19.5C22.5 12.0441 28.5442 5.99998 36 5.99998C43.4558 5.99998 49.5 12.0441 49.5 19.5Z" stroke="#6834FF" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-md bg-brand-50" />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <h1 className="text-[28px] font-semibold text-text-primary leading-tight">
                  {userData.name}
                </h1>
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg text-text-secondary">{userData.email}</span>
                    <Copy className="w-6 h-6 text-[#97A1B2] cursor-pointer hover:opacity-70" />
                  </div>
                  <span className="text-lg text-text-secondary">{userData.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab("basic")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                activeTab === "basic"
                  ? "bg-brand-50 text-primary"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                activeTab === "education"
                  ? "bg-brand-50 text-primary font-semibold"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Education & skills
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
                activeTab === "experience"
                  ? "bg-brand-50 text-primary font-semibold"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Experience
            </button>
          </div>

          {activeTab === "basic" && (
            <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-primary">Basic Details</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                  <Pencil className="w-3.5 h-3.5 text-primary" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">First name</label>
                  <input
                    type="text"
                    disabled
                    placeholder="e.g. John"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Last name</label>
                  <input
                    type="text"
                    disabled
                    placeholder="e.g. Doe"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Email ID</label>
                  <input
                    type="email"
                    disabled
                    placeholder="e.g. mrnobody@mail.com"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Year of birth</label>
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      placeholder="YYYY"
                      className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                    />
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Gender</label>
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      placeholder="Select an option"
                      className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                    />
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Phone number</label>
                  <div className="flex items-center h-10 px-2.5 border border-gray-100 rounded-md bg-gray-50">
                    <div className="flex items-center gap-2 pr-2 border-r border-[#D0C0FF]">
                      <div className="w-[22px] h-4 rounded-sm border border-gray-100 overflow-hidden">
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                          <rect width="22" height="16" rx="2" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M11 10.6666C12.4457 10.6666 13.619 9.47198 13.619 7.99998C13.619 6.52798 12.4457 5.33331 11 5.33331C9.55428 5.33331 8.38095 6.52798 8.38095 7.99998C8.38095 9.47198 9.55428 10.6666 11 10.6666ZM11 9.59998C11.8674 9.59998 12.5714 8.88318 12.5714 7.99998C12.5714 7.11678 11.8674 6.39998 11 6.39998C10.1326 6.39998 9.42857 7.11678 9.42857 7.99998C9.42857 8.88318 10.1326 9.59998 11 9.59998Z" fill="#1A47B8"/>
                          <path d="M11 8.53334C11.2893 8.53334 11.5238 8.29456 11.5238 8.00001C11.5238 7.70546 11.2893 7.46667 11 7.46667C10.7107 7.46667 10.4762 7.70546 10.4762 8.00001C10.4762 8.29456 10.7107 8.53334 11 8.53334Z" fill="#1A47B8"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 11H22V16H0V11Z" fill="#249F58"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V5H0V0Z" fill="#FF6C2D"/>
                        </svg>
                      </div>
                      <ChevronDown className="w-3 h-3 text-[#0B1331]" />
                    </div>
                    <input
                      type="text"
                      disabled
                      value="8332883854"
                      className="flex-1 px-2 text-sm bg-transparent text-text-secondary border-none outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Address</label>
                  <textarea
                    disabled
                    placeholder="Enter here"
                    className="flex-1 p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary resize-none min-h-[120px]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Pincode</label>
                      <input
                        type="text"
                        disabled
                        placeholder="Enter here"
                        className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Domicile state</label>
                      <div className="relative">
                        <input
                          type="text"
                          disabled
                          placeholder="Select an option"
                          className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                        />
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Domicile country</label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        placeholder="Select an option"
                        className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                      />
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Alternate Phone no</label>
                  <input
                    type="text"
                    disabled
                    placeholder="e.g. 9876543210"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-text-primary">Education Details</h2>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                    <Pencil className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

                <div className="flex gap-6 mb-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">School / College</label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. Lincoln College"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Highest degree or equivalent</label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. Bachelors in Technology"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Course</label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g. Computer science engineering"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                    />
                  </div>
                  <div className="w-[259px] flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Year of completion</label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        placeholder="YYYY"
                        className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                      />
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                    </div>
                  </div>
                  <div className="w-[259px] flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Grade</label>
                    <input
                      type="text"
                      disabled
                      placeholder="Enter here"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-text-primary">Skills & Projects</h2>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                    <Pencil className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

                <div className="flex gap-6">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Skills</label>
                    <textarea
                      disabled
                      placeholder="Enter here"
                      className="h-[120px] p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary resize-none"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Projects</label>
                    <textarea
                      disabled
                      placeholder="Enter here"
                      className="h-[120px] p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-text-primary">Work Experience</h2>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                    <Pencil className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Domain</label>
                      <input
                        type="text"
                        disabled
                        placeholder="e.g. Technology"
                        className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                      />
                    </div>

                    <div className="flex items-start gap-0">
                      <div className="flex items-center justify-center w-7 h-16">
                        <div className="w-px h-full bg-[#B9C0CB]" />
                      </div>
                      <div className="flex-1 flex gap-6">
                        <div className="flex-1 flex flex-col gap-1">
                          <label className="text-xs text-text-secondary">Sub-domain</label>
                          <input
                            type="text"
                            disabled
                            placeholder="e.g. MERN Stack"
                            className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                          />
                        </div>
                        <div className="w-[348px] flex flex-col gap-1">
                          <label className="text-xs text-text-secondary">Experience</label>
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              placeholder="Select an option"
                              className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                            />
                            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Domain</label>
                      <input
                        type="text"
                        disabled
                        placeholder="e.g. Technology"
                        className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                      />
                    </div>

                    <div className="flex items-start gap-0">
                      <div className="flex items-center justify-center w-7 h-16">
                        <div className="w-px h-full bg-[#B9C0CB]" />
                      </div>
                      <div className="flex-1 flex gap-6">
                        <div className="flex-1 flex flex-col gap-1">
                          <label className="text-xs text-text-secondary">Sub-domain</label>
                          <input
                            type="text"
                            disabled
                            placeholder="e.g. MERN Stack"
                            className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                          />
                        </div>
                        <div className="w-[348px] flex flex-col gap-1">
                          <label className="text-xs text-text-secondary">Experience</label>
                          <div className="relative">
                            <input
                              type="text"
                              disabled
                              placeholder="Select an option"
                              className="h-10 w-full px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary pr-8"
                            />
                            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-[#97A1B2]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-1 bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-text-primary">LinkedIn</h2>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                      <Pencil className="w-3.5 h-3.5 text-primary" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Profile URL</label>
                    <input
                      type="text"
                      disabled
                      placeholder="linkedin.com/in/mrbean"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-secondary"
                    />
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-text-primary">Resume</h2>
                    <button className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors">
                      <Pencil className="w-3.5 h-3.5 text-primary" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-1">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6.0001 2H14.0001C14.6366 2 15.2471 2.25286 15.6972 2.70294C16.1472 3.15303 16.4001 3.76348 16.4001 4.4V15.6C16.4001 16.2365 16.1472 16.847 15.6972 17.2971C15.2471 17.7471 14.6366 18 14.0001 18H6.0001C5.36358 18 4.75313 17.7471 4.30304 17.2971C3.85295 16.847 3.6001 16.2365 3.6001 15.6V4.4C3.6001 3.76348 3.85295 3.15303 4.30304 2.70294C4.75313 2.25286 5.36358 2 6.0001 2ZM6.0001 3.6C5.78792 3.6 5.58444 3.68429 5.43441 3.83431C5.28438 3.98434 5.2001 4.18783 5.2001 4.4V15.6C5.2001 15.8122 5.28438 16.0157 5.43441 16.1657C5.58444 16.3157 5.78792 16.4 6.0001 16.4H14.0001C14.2123 16.4 14.4158 16.3157 14.5658 16.1657C14.7158 16.0157 14.8001 15.8122 14.8001 15.6V4.4C14.8001 4.18783 14.7158 3.98434 14.5658 3.83431C14.4158 3.68429 14.2123 3.6 14.0001 3.6H6.0001ZM7.6001 4.4H12.4001C12.6123 4.4 12.8158 4.48429 12.9658 4.63431C13.1158 4.78434 13.2001 4.98783 13.2001 5.2C13.2001 5.41217 13.1158 5.61566 12.9658 5.76569C12.8158 5.91571 12.6123 6 12.4001 6H7.6001C7.38792 6 7.18444 5.91571 7.03441 5.76569C6.88438 5.61566 6.8001 5.41217 6.8001 5.2C6.8001 4.98783 6.88438 4.78434 7.03441 4.63431C7.18444 4.48429 7.38792 4.4 7.6001 4.4Z" fill="#6834FF"/>
                      </svg>
                      <span className="text-sm text-text-primary">myresume.pdf</span>
                    </div>
                    <button className="h-8 px-4 rounded-md bg-brand-50 text-xs text-primary hover:bg-brand-75 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              ← Back to Users
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
