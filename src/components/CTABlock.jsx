import { CTABase, CTAContent } from 'utils/theme';

const CallToAction = ({
  background,
  children,
  parentClassName = '',
  childClassName = '',
}) => {
  // eslint-disable-next-line no-useless-concat
  const classNames = CTABase + ' ' + parentClassName + ' ' + 'cta-base';
  const contentClassNames = CTAContent + ' ' + childClassName;
  return (
    <div
      className={classNames}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={contentClassNames}>{children}</div>
    </div>
  );
};

export default CallToAction;
