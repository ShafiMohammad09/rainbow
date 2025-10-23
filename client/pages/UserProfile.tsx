import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import { Copy, Pencil, ArrowLeft, Save } from "lucide-react";
import { useUsers } from "@/context/UserContext";
import { useNotifications } from "@/context/NotificationContext";

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getUserById, updateUser } = useUsers();
  const { addNotification } = useNotifications();

  const userId = parseInt(id || "0");
  const user = getUserById(userId);
  const userName = user?.name || "User";

  const [activeTab, setActiveTab] = useState("basic");
  const [isEditingBasic, setIsEditingBasic] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  
  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    yearOfBirth: "",
    gender: "",
    phoneNumber: "",
    address: "",
    pincode: "",
    domicileState: "",
    domicileCountry: "",
    alternatePhoneNumber: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    course: "",
    yearOfCompletion: "",
    grade: "",
    skills: "",
    projects: "",
  });

  const [experience, setExperience] = useState({
    domains: [
      { domain: "", subDomain: "", experience: "" },
      { domain: "", subDomain: "", experience: "" },
    ],
    linkedinUrl: "",
    resumeUrl: "",
  });

  const loadUserData = () => {
    if (user) {
      setBasicInfo({
        firstName: user.basicInfo?.firstName || "",
        lastName: user.basicInfo?.lastName || "",
        email: user.email || "",
        yearOfBirth: user.basicInfo?.yearOfBirth || "",
        gender: user.basicInfo?.gender || "",
        phoneNumber: user.basicInfo?.phoneNumber || user.contact?.replace("+91 ", "") || "",
        address: user.basicInfo?.address || "",
        pincode: user.basicInfo?.pincode || "",
        domicileState: user.basicInfo?.domicileState || "",
        domicileCountry: user.basicInfo?.domicileCountry || "",
        alternatePhoneNumber: user.basicInfo?.alternatePhoneNumber || "",
      });
      
      setEducation({
        school: user.education?.school || "",
        degree: user.education?.degree || "",
        course: user.education?.course || "",
        yearOfCompletion: user.education?.yearOfCompletion || "",
        grade: user.education?.grade || "",
        skills: user.education?.skills || "",
        projects: user.education?.projects || "",
      });
      
      setExperience({
        domains: user.experience?.domains || [
          { domain: "", subDomain: "", experience: "" },
          { domain: "", subDomain: "", experience: "" },
        ],
        linkedinUrl: user.experience?.linkedinUrl || "",
        resumeUrl: user.experience?.resumeUrl || "",
      });
    }
  };

  useEffect(() => {
    loadUserData();
  }, [user]);

  useEffect(() => {
    setIsEditingBasic(false);
    setIsEditingEducation(false);
    setIsEditingExperience(false);
    loadUserData();
  }, [activeTab]);

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-lg text-text-secondary">User not found</p>
        </div>
      </div>
    );
  }

  const handleSaveBasicInfo = () => {
    updateUser(userId, {
      basicInfo: basicInfo,
      name: `${basicInfo.firstName} ${basicInfo.lastName}`.trim() || user.name,
      email: basicInfo.email,
    });
    setIsEditingBasic(false);
    loadUserData();
    toast.success("Basic Information Updated ✏️", {
      description: `${userName}'s basic information has been saved successfully`,
      duration: 3000,
    });
    addNotification({
      title: "Basic Information Updated ✏️",
      message: `${userName}'s basic information has been saved successfully`,
      type: "success",
    });
  };

  const handleCancelBasicInfo = () => {
    loadUserData();
    setIsEditingBasic(false);
  };

  const handleSaveEducation = () => {
    updateUser(userId, {
      education: education,
    });
    setIsEditingEducation(false);
    loadUserData();
    toast.success("Education & Skills Updated 🎓", {
      description: `${userName}'s education and skills have been saved successfully`,
      duration: 3000,
    });
    addNotification({
      title: "Education & Skills Updated 🎓",
      message: `${userName}'s education and skills have been saved successfully`,
      type: "success",
    });
  };

  const handleCancelEducation = () => {
    loadUserData();
    setIsEditingEducation(false);
  };

  const handleSaveExperience = () => {
    updateUser(userId, {
      experience: experience,
    });
    setIsEditingExperience(false);
    loadUserData();
    toast.success("Experience Updated 💼", {
      description: `${userName}'s work experience has been saved successfully`,
      duration: 3000,
    });
    addNotification({
      title: "Experience Updated 💼",
      message: `${userName}'s work experience has been saved successfully`,
      type: "success",
    });
  };

  const handleCancelExperience = () => {
    loadUserData();
    setIsEditingExperience(false);
  };

  const handleDomainChange = (index: number, field: string, value: string) => {
    const newDomains = [...experience.domains];
    newDomains[index] = { ...newDomains[index], [field]: value };
    setExperience({ ...experience, domains: newDomains });
  };

  const handleTabChange = (tab: string) => {
    if (isEditingBasic || isEditingEducation || isEditingExperience) {
      const confirmSwitch = window.confirm("You have unsaved changes. Do you want to discard them?");
      if (!confirmSwitch) return;
    }
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-4 md:pt-6 pb-8 md:pb-12">
        <div className="w-full max-w-[1216px] px-4 md:px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-4 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Users
          </button>

          <div className="relative bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-8 mb-6">
            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-20">
              <div className="relative flex-shrink-0">
                <div className="w-[120px] h-[120px] md:w-[165px] md:h-[165px] rounded-full bg-brand-50 border-4 border-white shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 72 72" fill="none" className="md:w-[72px] md:h-[72px]">
                    <path d="M19.7327 46.4447C15.4884 48.972 4.36009 54.1323 11.138 60.5897C14.4489 63.744 18.1365 66 22.7726 66H49.2274C53.8635 66 57.5511 63.744 60.862 60.5897C67.6399 54.1323 56.5116 48.972 52.2673 46.4447C42.3144 40.5184 29.6856 40.5184 19.7327 46.4447Z" fill="#F0EBFF" stroke="#6834FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M49.5 19.5C49.5 26.9558 43.4558 33 36 33C28.5442 33 22.5 26.9558 22.5 19.5C22.5 12.0441 28.5442 5.99998 36 5.99998C43.4558 5.99998 49.5 12.0441 49.5 19.5Z" stroke="#6834FF" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-1 text-center md:text-left">
                <h1 className="text-xl md:text-[28px] font-semibold text-text-primary leading-tight">
                  {user.name}
                </h1>
                <div className="flex flex-col gap-2 md:gap-3 mt-2">
                  <div className="flex items-center gap-2.5 justify-center md:justify-start flex-wrap">
                    <span className="text-sm md:text-lg text-text-secondary break-all">{user.email}</span>
                    <Copy className="w-5 h-5 md:w-6 md:h-6 text-[#97A1B2] cursor-pointer hover:opacity-70 flex-shrink-0" />
                  </div>
                  <span className="text-sm md:text-lg text-text-secondary break-all">{user.contact || "+91 " + (user.basicInfo?.phoneNumber || "")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 md:gap-3 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => handleTabChange("basic")}
              className={`px-3 md:px-4 py-1.5 text-xs md:text-sm font-semibold rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === "basic"
                  ? "bg-brand-50 text-primary"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => handleTabChange("education")}
              className={`px-3 md:px-4 py-1.5 text-xs md:text-sm rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === "education"
                  ? "bg-brand-50 text-primary font-semibold"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => handleTabChange("experience")}
              className={`px-3 md:px-4 py-1.5 text-xs md:text-sm rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === "experience"
                  ? "bg-brand-50 text-primary font-semibold"
                  : "bg-gray-50 text-text-secondary hover:bg-gray-100"
              }`}
            >
              Experience
            </button>
          </div>

          {activeTab === "basic" && (
            <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base md:text-lg font-semibold text-text-primary">Basic Details</h2>
                <button
                  onClick={() => setIsEditingBasic(true)}
                  disabled={isEditingBasic}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Pencil className="w-3.5 h-3.5 text-primary" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">First name</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.firstName}
                    onChange={(e) => setBasicInfo({ ...basicInfo, firstName: e.target.value })}
                    placeholder="e.g. John"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Last name</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.lastName}
                    onChange={(e) => setBasicInfo({ ...basicInfo, lastName: e.target.value })}
                    placeholder="e.g. Doe"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Email ID</label>
                  <input
                    type="email"
                    disabled={!isEditingBasic}
                    value={basicInfo.email}
                    onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                    placeholder="e.g. mrnobody@mail.com"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Year of birth</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.yearOfBirth}
                    onChange={(e) => setBasicInfo({ ...basicInfo, yearOfBirth: e.target.value })}
                    placeholder="YYYY"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Gender</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.gender}
                    onChange={(e) => setBasicInfo({ ...basicInfo, gender: e.target.value })}
                    placeholder="Select an option"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Phone number</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.phoneNumber}
                    onChange={(e) => setBasicInfo({ ...basicInfo, phoneNumber: e.target.value })}
                    placeholder="8332883854"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-4">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Address</label>
                  <textarea
                    disabled={!isEditingBasic}
                    value={basicInfo.address}
                    onChange={(e) => setBasicInfo({ ...basicInfo, address: e.target.value })}
                    placeholder="Enter here"
                    className="flex-1 p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white resize-none min-h-[120px]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3 md:gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Pincode</label>
                      <input
                        type="text"
                        disabled={!isEditingBasic}
                        value={basicInfo.pincode}
                        onChange={(e) => setBasicInfo({ ...basicInfo, pincode: e.target.value })}
                        placeholder="Enter here"
                        className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-text-secondary">Domicile state</label>
                      <input
                        type="text"
                        disabled={!isEditingBasic}
                        value={basicInfo.domicileState}
                        onChange={(e) => setBasicInfo({ ...basicInfo, domicileState: e.target.value })}
                        placeholder="Select an option"
                        className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Domicile country</label>
                    <input
                      type="text"
                      disabled={!isEditingBasic}
                      value={basicInfo.domicileCountry}
                      onChange={(e) => setBasicInfo({ ...basicInfo, domicileCountry: e.target.value })}
                      placeholder="Select an option"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-xs text-text-secondary">Alternate Phone no</label>
                  <input
                    type="text"
                    disabled={!isEditingBasic}
                    value={basicInfo.alternatePhoneNumber}
                    onChange={(e) => setBasicInfo({ ...basicInfo, alternatePhoneNumber: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                  />
                </div>
              </div>

              {isEditingBasic && (
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleCancelBasicInfo}
                    className="h-10 px-4 rounded-md bg-gray-100 text-sm text-text-secondary hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveBasicInfo}
                    className="h-10 px-4 rounded-md bg-primary text-sm text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "education" && (
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base md:text-lg font-semibold text-text-primary">Education Details</h2>
                  <button
                    onClick={() => setIsEditingEducation(true)}
                    disabled={isEditingEducation}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Pencil className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">School / College</label>
                    <input
                      type="text"
                      disabled={!isEditingEducation}
                      value={education.school}
                      onChange={(e) => setEducation({ ...education, school: e.target.value })}
                      placeholder="e.g. Lincoln College"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Highest degree or equivalent</label>
                    <input
                      type="text"
                      disabled={!isEditingEducation}
                      value={education.degree}
                      onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                      placeholder="e.g. Bachelors in Technology"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Course</label>
                    <input
                      type="text"
                      disabled={!isEditingEducation}
                      value={education.course}
                      onChange={(e) => setEducation({ ...education, course: e.target.value })}
                      placeholder="e.g. Computer science engineering"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                  <div className="flex-1 md:w-[259px] flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Year of completion</label>
                    <input
                      type="text"
                      disabled={!isEditingEducation}
                      value={education.yearOfCompletion}
                      onChange={(e) => setEducation({ ...education, yearOfCompletion: e.target.value })}
                      placeholder="YYYY"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                  <div className="flex-1 md:w-[259px] flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Grade</label>
                    <input
                      type="text"
                      disabled={!isEditingEducation}
                      value={education.grade}
                      onChange={(e) => setEducation({ ...education, grade: e.target.value })}
                      placeholder="Enter here"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base md:text-lg font-semibold text-text-primary">Skills & Projects</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Skills</label>
                    <textarea
                      disabled={!isEditingEducation}
                      value={education.skills}
                      onChange={(e) => setEducation({ ...education, skills: e.target.value })}
                      placeholder="Enter here"
                      className="h-[120px] p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white resize-none"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Projects</label>
                    <textarea
                      disabled={!isEditingEducation}
                      value={education.projects}
                      onChange={(e) => setEducation({ ...education, projects: e.target.value })}
                      placeholder="Enter here"
                      className="h-[120px] p-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {isEditingEducation && (
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleCancelEducation}
                    className="h-10 px-4 rounded-md bg-gray-100 text-sm text-text-secondary hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEducation}
                    className="h-10 px-4 rounded-md bg-primary text-sm text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base md:text-lg font-semibold text-text-primary">Work Experience</h2>
                  <button
                    onClick={() => setIsEditingExperience(true)}
                    disabled={isEditingExperience}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-50 hover:bg-brand-75 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    <Pencil className="w-3.5 h-3.5 text-primary" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {experience.domains.map((domain, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-text-secondary">Domain</label>
                        <input
                          type="text"
                          disabled={!isEditingExperience}
                          value={domain.domain}
                          onChange={(e) => handleDomainChange(index, 'domain', e.target.value)}
                          placeholder="e.g. Technology"
                          className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                        />
                      </div>

                      <div className="flex items-start gap-0">
                        <div className="hidden md:flex items-center justify-center w-7 h-16">
                          <div className="w-px h-full bg-[#B9C0CB]" />
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row gap-3 md:gap-6">
                          <div className="flex-1 flex flex-col gap-1">
                            <label className="text-xs text-text-secondary">Sub-domain</label>
                            <input
                              type="text"
                              disabled={!isEditingExperience}
                              value={domain.subDomain}
                              onChange={(e) => handleDomainChange(index, 'subDomain', e.target.value)}
                              placeholder="e.g. MERN Stack"
                              className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                            />
                          </div>
                          <div className="flex-1 md:w-[348px] flex flex-col gap-1">
                            <label className="text-xs text-text-secondary">Experience</label>
                            <input
                              type="text"
                              disabled={!isEditingExperience}
                              value={domain.experience}
                              onChange={(e) => handleDomainChange(index, 'experience', e.target.value)}
                              placeholder="Select an option"
                              className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-base md:text-lg font-semibold text-text-primary">LinkedIn</h2>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Profile URL</label>
                    <input
                      type="text"
                      disabled={!isEditingExperience}
                      value={experience.linkedinUrl}
                      onChange={(e) => setExperience({ ...experience, linkedinUrl: e.target.value })}
                      placeholder="linkedin.com/in/mrbean"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-md shadow-[0_2px_12px_0_rgba(54,89,226,0.12)] p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-base md:text-lg font-semibold text-text-primary">Resume</h2>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-text-secondary">Upload URL</label>
                    <input
                      type="text"
                      disabled={!isEditingExperience}
                      value={experience.resumeUrl}
                      onChange={(e) => setExperience({ ...experience, resumeUrl: e.target.value })}
                      placeholder="https://example.com/resume.pdf"
                      className="h-10 px-3 text-sm border border-gray-100 rounded-md bg-gray-50 text-text-primary disabled:bg-gray-50 disabled:text-text-secondary enabled:bg-white"
                    />
                  </div>
                </div>
              </div>

              {isEditingExperience && (
                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleCancelExperience}
                    className="h-10 px-4 rounded-md bg-gray-100 text-sm text-text-secondary hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveExperience}
                    className="h-10 px-4 rounded-md bg-primary text-sm text-white hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
