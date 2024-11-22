import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SidebarAdmin() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false); // New state for dropdown

  useEffect(() => {
    if (location.pathname.includes("/Home")) {
      setActive("1");
    } else if (location.pathname.includes("/contact")) {
      setActive("2");
    } else if (location.pathname.includes("/loan")) {
      setActive("3");
    } else if (location.pathname.includes("/product")) {
      setActive("4");
    } else if (location.pathname.includes("/bank")) {
      setActive("5");
    } else if (location.pathname.includes("/credit-scoring")) {
      setActive("6");
    } else {
      setActive("1");
    }
  }, [location.pathname]);

  const getClassName = (index) => {
    return active === index ? "flex items-center bg-[#17A9E2] text-white rounded-lg" : "flex items-center text-[#646567]";
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!isProductDropdownOpen); // Toggle dropdown state
  };

  return (
    <aside className="w-1/5 bg-white h-[800px] border-2 border-[#D9D9D9] shadow-lg">
      <div className="flex justify-center items-center mb-4">
        <img src="/logo.svg" alt="Loan Market Logo" className="w-auto" />
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/Home" className={getClassName("1")}>
              <img src="/home.svg" className="w-[40px] p-2"/>Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/contact" className={getClassName("2")}>
              <img src="/contact.svg" className="w-[40px] p-2"/> Contact
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/loan"className={getClassName("3")}>
              <img src="/loan.svg" className="w-[40px] p-2"/> Loan
            </Link>
          </li>
          <li className="flex items-center mb-4 cursor-pointer" onClick={toggleProductDropdown}>
            <img src="/product.svg" className="w-[40px] p-2"/> <p className="text-[#646567]">Product</p> <img className="flex justify-center ml-auto" src="/downBlack.svg"/>
          
          </li>
          {isProductDropdownOpen && ( // Conditional rendering of dropdown items
            <ul className="ml-8">
              <li className="mb-2">
                <Link to="/home" className={getClassName("4a")}>
                  Bank Product
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/home" className={getClassName("4b")}>
                  Product
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/home" className={getClassName("4c")}>
                  Category Product
                </Link>
              </li>
            </ul>
          )}
          <li className="mb-4">
            <Link to="/bank" className={getClassName("5")}>
              <img src="/bank.svg" className="w-[40px] p-2"/>Bank
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/credit-scoring" className={getClassName("6")}>
              <img src="/credit.svg" class Name="w-[40px] p-2"/>Credit Scoring
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/faq" className={getClassName("7")}>
              <img src="/faq.svg" className="w-[40px] p-2"/> FAQ's
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/pipeline" className={getClassName("8")}>
              <img src="/pipeline.svg" className="w-[40px] p-2"/> Pipeline
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/pipeline-developer" className={getClassName("9")}>
              <img src="/pipeline.svg" className="w-[40px] p-2"/> Pipeline Developer
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/marketing-tools" className={getClassName("10")}>
              <img src="/marketing.svg" className="w-[40px] p-2"/> Marketing Tools
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/whatsapp" className={getClassName("11")}>
              <img src="/whatsapp.svg" className="w-[40px] p-2"/> Whatsapp<img className="flex justify-center ml-auto" src="/downBlack.svg"/>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarAdmin;