export default function MainButton(props) {
  return (
    <>
      <button
        className={`${props.buttonStyle} bg-gradient-to-r from-blue-600 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 py-5 px-8 text-white rounded-md`}
      >
        {props.buttonText}
      </button>
    </>
  );
}
