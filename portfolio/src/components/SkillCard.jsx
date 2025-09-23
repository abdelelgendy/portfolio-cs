import PropTypes from 'prop-types';

const SkillCard = ({ category }) => {
  // Get skill color based on proficiency level
  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    if (level >= 60) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {category.category}
      </h3>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-gray-700 font-medium">
                <span className="text-lg">{skill.icon}</span>
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${getSkillColor(skill.level)}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  category: PropTypes.shape({
    category: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default SkillCard;
