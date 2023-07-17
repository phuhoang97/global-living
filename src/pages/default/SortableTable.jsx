import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
	arrayMove,
	horizontalListSortingStrategy,
	SortableContext,
} from "@dnd-kit/sortable";

import { Tabs } from "antd";
import React, { useState } from "react";
import DraggableTabNode from "./DraggableTabNode";

const SortableTable = () => {
	const [items, setItems] = useState([
		{
			key: "1",
			label: `Tab 1`,
			children: "Content of Tab Pane 1",
		},
		{
			key: "2",
			label: `Tab 2`,
			children: "Content of Tab Pane 2",
		},
		{
			key: "3",
			label: `Tab 3`,
			children: "Content of Tab Pane 3",
		},
	]);
	const [className, setClassName] = useState("");
	const sensor = useSensor(PointerSensor, {
		activationConstraint: {
			distance: 10,
		},
	});
	const onDragEnd = ({ active, over }) => {
		if (active.id !== over?.id) {
			setItems((prev) => {
				const activeIndex = prev.findIndex((i) => i.key === active.id);
				const overIndex = prev.findIndex((i) => i.key === over?.id);
				return arrayMove(prev, activeIndex, overIndex);
			});
		}
	};
	return (
		<Tabs
			className={className}
			items={items}
			renderTabBar={(tabBarProps, DefaultTabBar) => (
				<DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
					<SortableContext
						items={items.map((i) => i.key)}
						strategy={horizontalListSortingStrategy}
					>
						<DefaultTabBar {...tabBarProps}>
							{(node) => (
								<DraggableTabNode
									{...node.props}
									key={node.key}
									onActiveBarTransform={setClassName}
								>
									{node}
								</DraggableTabNode>
							)}
						</DefaultTabBar>
					</SortableContext>
				</DndContext>
			)}
		/>
	);
};
export default SortableTable;
