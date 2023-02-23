import React from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';

import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';


export const jobsGrid = [
  { field: 'JobID',
    headerText: 'Job ID',
    width: '120',
    textAlign: 'Center' },
  { field: 'JobTitle',
    headerText: 'Job Title',
    width: '150',
    textAlign: 'Center' },
  { field: 'JobDescription',
    headerText: 'Job Description',
    width: '150', 
    textAlign: 'Center' },
  { field: 'Salary',
    headerText: 'Salary',
    width: '150',
    textAlign: 'Center',
    format: 'C2',},
  { field: 'Status',
    headerText: 'Status',
    width: '150',
    textAlign: 'Center',
    format: 'C2'
  },
];
export const jobsData = [
  {
    JobID: 1,
    JobTitle: 'Web Developer',
    JobDescription: 'Web Developer',
    Salary: 1000,
    Status : 'Active',
  },
  {
    JobID: 2,
    JobTitle: 'Web Designer',
    JobDescription: 'Web Designer',
    Salary: 1000,
    Status: 'Active',
  },
  {
    JobID: 3,
    JobTitle: 'Software Engineer',
    JobDescription: 'Software Engineer',
    Salary: 1000,
    Status : 'Active',
  },
  {
    JobID: 4,
    JobTitle: 'Software Developer',
    JobDescription: 'Software Developer',
    Salary: 1000,
    Status : 'Inactive',
  },
];

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const employeesGrid = [
  { headerText: 'Student',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Companie',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Locatie',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Data Angajarii',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Categorie',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'ID Student',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'PDFViewer',
        icon: <AiFillFilePdf />,
      },
      {
        name: 'students',
        icon: <FaUserGraduate />,
      },

    ],
  },
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Blidaru Ionut',
    Title: 'Programator',
    HireDate: '01/02/2021',
    Country: 'Timisoara',
    ReportsTo: 'Web Developer',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Bogdan Andrei',
    Title: 'Programator',
    HireDate: '01/02/2021',
    Country: 'Timisoara',
    ReportsTo: 'Web Developer',
    EmployeeImage:
    avatar4,
  },
  {
    EmployeeID: 3,
    Name: 'Alexandra',
    Title: 'Programator',
    HireDate: '01/02/2021',
    Country: 'Timisoara',
    ReportsTo: 'Web Developer',
    EmployeeImage:
    avatar2,
  },
  { EmployeeID: 4,
    Name: 'Bogdan Andrei',
    Title: 'Marketing Trainee',
    HireDate: '01/02/2021',
    Country: 'Timisoara',
    ReportsTo: 'Marketing Manager',
    EmployeeImage:
    avatar,  
  },

];


