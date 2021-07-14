import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <IoIcons.IoIosPaper />

  },
  {
    title: 'Country/Region',
    path: '/country',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Difficulty',
    path: '/difficulty',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'A Walk in the Park',
        path: '/recipes/easy',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Challenge Yourself',
        path: '/recipes/challenging',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Oh, So you think you're a chef?",
        path: '/recipes/hard',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <IoIcons.IoMdHelpCircle />
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];