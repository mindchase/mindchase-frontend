import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Daily Life',
    path: 'daily-life',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Motivation',
        path: '/daily-life/motivation',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Empowerment',
        path: '/daily-life/empowerment',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Time and Structur Management',
        path: '/daily-life/time-and-structur-management',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Flow',
        path: '/daily-life/Flow',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Work Life',
    path: '/work-life',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Stress Management',
        path: '/work-life/stress-management',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Self Confidence',
        path: '/work-life/self-confidence',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Leadership',
        path: '/work-life/leadership',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Business Models',
        path: '/work-life/business-models',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Stage',
    path: '/stage',
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  

  subNav: [
    {
      title: 'Presentation Skills',
      path: '/stage/presentation-skills',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Storytelling',
      path: '/stage/storytelling',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Speaches',
      path: '/stage/speaches',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
    {
      title: 'Public Speaking',
      path: '/stage/public-speaking',
      icon: <IoIcons.IoIosPaper />,
      cName: 'sub-nav'
    },
  ]
  },




  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
