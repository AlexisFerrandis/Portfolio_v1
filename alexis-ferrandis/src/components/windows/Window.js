import React from "react";
import HeaderBarBtn from "./HeaderBarBtn";

const Window = (props) => {
	let windows = document.querySelectorAll(".window");

	function enableDraggableWindow() {
		for (let i = 0; i < windows.length; i++) {
			function dragWindow(element) {
				let pos1 = 0,
					pos2 = 0,
					pos3 = 0,
					pos4 = 0;

				windows[i].onmousedown = dragMouseDown;

				function dragMouseDown(e) {
					e = e || window.event;
					e.preventDefault();
					pos3 = e.clientX;
					pos4 = e.clientY;
					document.onmouseup = closeDragElement;
					document.onmousemove = elementDrag;
				}

				function closeDragElement() {
					// stop moving when mouse button is released:
					document.onmouseup = null;
					document.onmousemove = null;
				}

				function elementDrag(e) {
					e = e || window.event;
					e.preventDefault();
					pos1 = pos3 - e.clientX;
					pos2 = pos4 - e.clientY;
					pos3 = e.clientX;
					pos4 = e.clientY;
					element.style.top = element.offsetTop - pos2 + "px";
					element.style.left = element.offsetLeft - pos1 + "px";
				}
			}
			dragWindow(windows[i]);
		}
	}
	return (
		<section onClick={enableDraggableWindow} className="window" id={props.id}>
			<div className="window-header-bar">
				<div className="window-header-bar__buttons">
					<HeaderBarBtn id={props.id + `Btn`} />
				</div>
				<div className="window-header-bar__title">{props.title}</div>
			</div>
			<div className="window-content">{props.content}</div>
		</section>
	);
};

export default Window;
