export default function Popup() {

  function closePopup() {
    document.querySelector(".Popup").style.display = 'none'
  }

  return (
    <div className="Popup">
      <div className="Popup-content position-relative">
        <h3 className="m-0">You are submited successfully</h3>
        <i className="bi bi-x-circle closePopup" onClick={closePopup}></i>
      </div>
    </div>
  )
}