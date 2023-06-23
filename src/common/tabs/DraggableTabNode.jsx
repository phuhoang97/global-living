import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { css } from "@emotion/css";
import { cloneElement, useEffect } from "react";

const DraggableTabNode = ({ className, onActiveBarTransform, ...props }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isSorting,
	} = useSortable({
		id: props["data-node-key"],
	});

	const style = {
		...props.style,
		transform: CSS.Transform.toString(transform),
		transition,
		cursor: "move",
	};

	useEffect(() => {
		if (!isSorting) {
			onActiveBarTransform("");
		} else if (className?.includes("ant-tabs-tab-active")) {
			onActiveBarTransform(css`
				.ant-tabs-ink-bar {
					transform: ${CSS.Transform.toString(transform)};
					transition: ${transition} !important;
				}
			`);
		}
	}, [className, isSorting, transform]);

	return cloneElement(props.children, {
		ref: setNodeRef,
		style,
		...attributes,
		...listeners,
	});
};

export default DraggableTabNode;
