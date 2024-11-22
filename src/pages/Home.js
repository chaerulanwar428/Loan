import Navbar from '../component/Navbar';
import SidebarAdmin from '../component/Sidebar/SidebarAdmin';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


function Home() {
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    CanvasJS.addColorSet("colorChart",
        [//colorSet Array
            "#1FFFE1",
            "#51C4E9",
            "#146C94",
            "#6150C1",
            "#4A3764",
       ]);
		const options = {
			animationEnabled: true,
            colorSet: "colorChart",
			data: [{
				type: "doughnut",
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Artha Graha", y: 25 },
                    { name: "BTN", y: 20 },
                    { name: "Mandiri", y: 15 },
					{ name: "KEB HANA Bank", y: 10 },
					{ name: "BRI", y: 30 },
				]
			}]
		}
		

          
  return (
    <div className="flex bg-[#D9D9D9]">  
    <SidebarAdmin/>
    <div className='w-full'>
    <main className="flex flex-col">
    <Navbar/>
        <section className="bg-white p-6 border-b-2">
            <div className="flex items-center mb-6">
                <img src="/profil.svg" alt="Profile Picture" className="rounded-full mr-4"/>
                <div>
                    <h2 className="text-xl font-bold text-[#17A9E2] mb-2">YOHANNES AFFANDY (JOJO)</h2>
                    <div className='flex'>
                        <div className='border-r-2 pr-5 mr-5'>
                            <div className='flex mb-2'><img src="/office.svg" className='bg-[#E2F0FF] rounded-full p-1 h-[30px] mr-2'/><p>Loan Market Office Dev</p></div>
                            <div className='flex'><div className='text-xs h-[30px] w-[30px] bg-[#E2F0FF] text-[#17A9E2] font-bold rounded-full mr-2 flex items-center justify-center'><p className=''>ID:</p></div><p>LM9990001</p></div>
                        </div>
                        <div>
                        <div className='flex mb-2'><img src="/email.svg" className='bg-[#E2F0FF] rounded-full p-1 h-[30px] mr-2'/><p >it@loanmarket.co.id</p></div>
                        <div className='flex'><img src="/phone.svg" className='bg-[#E2F0FF] rounded-full p-1 h-[30px] mr-2'/><p>6281234567890</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div className='flex'>
    <div className='mx-10 mt-7 space-y-7'>
    <div className="grid grid-cols-4 gap-4 mb-10">
    <div className="bg-white flex items-center h-[90px] bg-white shadow-md px-1 rounded-lg transition-transform duration-200 hover:scale-105">
                    <div className='flex mt-2 h-[60px]'>
                        <img src='/cardContact.svg' className='h-[45px] my-auto ml-1.5 mr-4'/>
                        <div className='text-center'>
                        <p className='font-bold'>CONTACT</p>
                        <p className="text-2xl font-bold text-[#17A9E2]">51</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex items-center h-[90px] bg-white shadow-md px-1 rounded-lg transition-transform duration-200 hover:scale-105">
                    <div className='flex mt-2 h-[60px]'>
                        <img src='/cardLoan.svg' className='h-[45px] my-auto ml-1.5 mr-4'/>
                        <div className='text-center'>
                        <p className="font-bold">LOAN</p>
                        <p className="text-2xl font-bold text-[#17A9E2]">58</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex items-center h-[90px] bg-white shadow-md px-1 rounded-lg transition-transform duration-200 hover:scale-105">
                    <div className='flex mt-2 h-[60px]'>
                        <img src='/cardProduct.svg' className='h-[45px] my-auto ml-1.5 mr-4'/>
                        <div className='text-center'>
                        <p className='font-bold'>PRODUCT</p>
                        <p className="text-2xl font-bold text-[#17A9E2]">80</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex items-center h-[90px] bg-white shadow-md px-1 rounded-lg transition-transform duration-200 hover:scale-105">
                    <div className='flex mt-2 h-[60px]'>
                        <img src='/cardBank.svg' className='h-[45px] my-auto ml-1.5 mr-4'/>
                        <div className='text-center'>
                        <p className='font-bold'>Bank</p>
                        <p className="text-2xl font-bold text-[#17A9E2]">30</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
            <img src="/edit.svg" className='-mb-12 mr-5 ml-auto h-[30px]'/>
            <div className="grid grid-cols-2 bg-white shadow-lg p-4 rounded-lg">
                <div className="p-6 text-center border-r-2">
                    <p className="mb-4 font-bold">PINJAMAN DISETUJUI</p>
                    <div className="relative w-24 h-24 mx-auto mb-4">
                    <CircularProgressbar
                    value={40}
                    text={`${40}%`}
                    />
                    </div>
                    <p>2/5 Pinjaman telah disetujui</p>
                </div>
                <div className="p-6 text-center">
                    
                    <p className="mb-4 font-bold">TARGET</p>
                    <div className="relative w-24 h-24 mx-auto mb-4">
                    <CircularProgressbar
                    value={100}
                    text={`${280}%`}
                    />
                    </div>
                    <p>Rp14.000.000.000,00 / Rp5.000.000.000</p>
                </div>
                </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-5'>
                <h1 className='text-2xl text-center font-bold'>Top 5 Bank Approval Tertinggi</h1>
                <CanvasJSChart options = {options}/>
            </div>
            </div>
            <div className="bg-white mt-7 w-[250px] h-screen shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">NOTIFICATION</h2>
        <div className="relative border-l border-gray-300">
        <Timeline>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2 hrs
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='flex flex-col'>
                <div>admin_branch has updated</div>
                <div className='text-xs text-[#646567]'>Harry Handoko - Contact|MYCRM</div>
            </div>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2 hrs
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='flex flex-col'>
                <div>admin_branch has updated</div>
                <div className='text-xs text-[#646567]'>Harry Handoko - Contact|MYCRM</div>
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2 hrs
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className='flex flex-col'>
                <div>admin_branch has updated</div>
                <div className='text-xs text-[#646567]'>Harry Handoko - Contact|MYCRM</div>
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2 hrs
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
            <div className='flex flex-col'>
                <div>admin_branch has updated</div>
                <div className='text-xs text-[#646567]'>Harry Handoko - Contact|MYCRM</div>
            </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
      </div>
    </div>
    </div>
    </div>
</div>
  );
}
             


export default Home;
