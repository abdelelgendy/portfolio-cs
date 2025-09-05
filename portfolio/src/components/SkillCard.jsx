import PropTypes from 'prop-types';

const SkillCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {category.category}
      </h3>
      
      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-gray-700">
              <span>{skill.icon}</span>
              {skill.name}
            </span>
            <span className="text-sm text-gray-500">{skill.level}%</span>
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
