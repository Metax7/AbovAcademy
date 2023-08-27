export default function ServicesProvide(props) {
  return (
    <>
      <div
        className={`${props.reverse} flex p-2 items-center md:p-5 lg:p-8 border-2`}
      >
        <div className={`${props.left} text-right`}>
          <h3 className="font-bold md:text-2xl text-main-color font-pop">
            {props.title}
          </h3>
          <p className="text-neutral-500 text-xs sm:text-sm font-pop">
            {props.description}
          </p>
        </div>

        <div className="p-3">
          <img src={props.img} className="w-11 md:w-20" alt="" />
        </div>
      </div>
    </>
  );
}
