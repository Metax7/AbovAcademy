export default function Title(props) {
  return (
    <>
      <div className={`${props.titleStyle} text-center space-y-3`}>
        <div className="text-lg font-fair text-main2-color font-bold">
          {props.title}
        </div>
        <div className="text-xl md:text-2xl lg:text-6xl font-pop font-bold text-main-color">
          {props.bigTitle}
        </div>
      </div>
    </>
  );
}
