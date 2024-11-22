import React, { useState } from "react";
import SidebarAdmin from '../component/Sidebar/SidebarAdmin'
import Navbar from '../component/Navbar'
import StepNavigation from "../component/Step/StepNavigation";
import MultiForm from "../component/Multiform/MultiForm";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import StepOne from "../component/Form/StepOne";
import StepTwo from "../component/Form/StepTwo";
import StepThree from "../component/Form/StepThree";
import StepFour from "../component/Form/StepFour";
import StepFive from "../component/Form/StepFive";
import StepSix from "../component/Form/StepSix";
import StepSeven from "../component/Form/StepSeven";
import StepEight from "../component/Form/StepEight";
import StepNine from "../component/Form/StepNine";
import StepTen from "../component/Form/StepTen";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import StepEleven from "../component/Form/StepEleven";
const steps = ["Pinjaman", "Pekerjaan", "Alamat","Informasi Asset","Informasi Tambahan",
                "Upload Dokumen","Pilihan Produk & Bank","Bank Officer","Surat Keterangan","PDF CPA","Summary"];

function Loan() {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  
    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
  
    const renderStepContent = (step) => {
      switch (step) {
        case 0:
          return <StepOne formData={formData} setFormData={setFormData} />;
        case 1:
          return <StepTwo formData={formData} setFormData={setFormData} />;
        case 2:
          return <StepThree formData={formData} />;
        case 3:
          return <StepFour formData={formData} />;
        case 4:
          return <StepFive formData={formData} />;
        case 5:
          return <StepSix formData={formData} />;
        case 6:
          return <StepSeven formData={formData} />;
        case 7:
          return <StepEight formData={formData} />;
        case 8:
          return <StepNine formData={formData} />;
        case 9:
          return <StepTen formData={formData} />;
        case 10:
          return <StepEleven formData={formData} />;
        default:
          return null;
      }
    };
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0, 82, 116, 1) 0%,rgb(0, 82, 116, 1) 50%,rgb(0, 82, 116, 1)100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(0, 82, 116, 1) 0%,rgb(0, 82, 116, 1) 50%,rgb(0, 82, 116, 1) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#005274',
  zIndex: 1,
  color: '#005274',
  width: 20,
  height: 20,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          '#005274',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          '#005274',
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

 
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
    </ColorlibStepIconRoot>
  );
}
  return (
    <div className='flex bg-[#D9D9D9]'>
        <SidebarAdmin/>
        <div  className='w-full bg-white'>
            <div>
                <header className="flex justify-between items-center border-b-2 p-4">
                    <h1 className="text-5xl text-[#646567]">Edit Application</h1>
                    <div className="flex items-center">
                    <div  className='flex justify-center items-center border-l-2 h-[28px] px-2'><img src="/notification.svg" className='h-[28px]'/><img className='flex justify-center h-[10px] px-1' src="downGrey.svg"/></div>
                    <div className="relative border-x-2 px-2">
                        <button className="flex items-center text-gray-700">
                            <span>YOHANNES AFFANDY</span>
                            <img className='flex justify-center items-center h-[10px] px-1' src="downGrey.svg"/>
                        </button>
                    </div>
                </div>
                </header>
                <Box sx={{ width: "100%" }} className="border-b-2 mb-7 p-5 !mb-0">
                <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
                {steps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
                </Stepper>
                </Box>
                <div className="h-10 bg-[#D9D9D9]"></div>
            </div>    
        <div className="relative px-10 bg-[#D9D9D9]">
          <div className="flex justify-between">
            <button
              disabled={activeStep === 0}
              onClick={handleBack}
              className="w-[40px]"
            >
             <img src="/buttonLeft.svg"/>
            </button>
            {activeStep === steps.length - 1 ? (
              <button
                onClick={() => alert("Form Submitted!")}
                className="w-[40px]"
              >
                <img src="/buttonRight.svg"/>
              </button>
            ) : (
              <button 
              onClick={handleNext}
              className="w-[40px]"
              >
                <img src="/buttonRight.svg"/>
              </button>
            )}
          </div>
          {renderStepContent(activeStep)}
        </div>
        </div>
    </div>
  )
}

export default Loan

