import style from './baseView.module.css';

const { baseViewRoot } = style;

export const BaseView = () => {

  return (
    <div id="baseView" className={baseViewRoot}>
      Base View
    </div>
  );
}
