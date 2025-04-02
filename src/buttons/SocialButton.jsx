const SocialButton = ({ href, icon, color }) => {
    const isGitHub = href.includes("github")
    const isLinkedIn = href.includes("linkedin")
    const isEmail = href.includes("mailto")
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300
          ${isGitHub ? "bg-white text-black dark:bg-black dark:text-white border border-black dark:border-white" : ""}
          ${isLinkedIn ? "bg-white text-[#0077b5] dark:bg-black dark:text-[#0077b5] border border-[#0077b5] " : ""}
          ${isEmail ? "bg-white text-[#F97316] dark:bg-black dark:text-[#F97316] border border-[#F97316]" : ""}
        `}
        style={{ backgroundColor: isGitHub || isLinkedIn ? "" : color }}
      >
        {icon}
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 text-xs text-white bg-black/80 px-2 dark:bg-white dark:text-black py-1 rounded transition-all duration-500">
          {href.includes("linkedin") ? "LinkedIn" : href.includes("github") ? "GitHub" : "Email"}
        </span>
      </a>
    )
  }
  
  export default SocialButton  