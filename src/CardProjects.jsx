import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const CardProjects = ({ title, description, technologies, imageUrl, githubLink, liveLink }) => {
  const renderTechnologyBadges = (tech) => {
    switch (tech) {
      case 'React':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-cyan-500">
            <FaReact className="mr-1" />
            React
          </span>
        );
      case 'HTML':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-orange-500">
            <FaHtml5 className="mr-1" />
            HTML
          </span>
        );
      case 'CSS':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-blue-500">
            <FaCss3Alt className="mr-1" />
            CSS
          </span>
        );
      case 'JavaScript':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-yellow-500">
            <FaJs className="mr-1" />
            JavaScript
          </span>
        );
      case 'Tailwind':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-sky-400">
            <SiTailwindcss className="mr-1" />
            Tailwind
          </span>
        );
      case 'Node.js':
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-green-500">
            <FaNodeJs className="mr-1" />
            Node.js
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative flex w-80 flex-col rounded-xl border-2 border-[#6FCF97] bg-white shadow-lg shadow-green-300 transition-all hover:shadow-green-500">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="p-6 pb-3 pt-3">
        <h5 className="mb-2 block text-xl font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="text-base text-gray-600">
          {description}
        </p>
      </div>
      <div className="p-6 pb-3 pt-0 flex flex-wrap gap-2">
        {technologies.map((tech) => renderTechnologyBadges(tech))}
      </div>
      <div className="p-6 pt-0 flex justify-between">
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-800 bg-[#F97316]/80 rounded-xl shadow-md transition-all hover:bg-[#B4E380] hover:scale-105"
        >
          <FaGithub className="text-xl" /> 
        </a>
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#73BBA3] border-2 border-[#73BBA3] rounded-xl shadow-md transition-all duration-50 hover:bg-[#73BBA3] hover:text-white hover:scale-105"
        >
          Preview
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
};

export default CardProjects;