import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box } from '@chakra-ui/react';

const TreeChart = ({ data }) => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (data && d3Container.current) {
            const margin = { top: 0, right: 120, bottom: 0, left: 120 },
                width = 1200 - margin.right - margin.left,
                height = 1000 - margin.top - margin.bottom;

            // Process the data
            const root = d3.stratify()
                .id(function (d) { return d.name; })
                .parentId(function (d) { return d.parent || undefined; }) // Handle root node by returning undefined if parent is missing
                (data);
            root.x0 = height / 2;
            root.y0 = 0;

            // Tree layout
            const treeLayout = d3.tree().size([height, width]);
            treeLayout(root);

            // Links
            const links = root.links();
            const linkPathGenerator = d3.linkHorizontal()
                .x(d => d.y)
                .y(d => d.x);

            d3.select(d3Container.current).select('*').remove();

            const svg = d3.select(d3Container.current)
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Nodes
            svg.selectAll('g.node')
                .data(root.descendants())
                .enter().append('g')
                .attr('class', 'node')
                .attr("transform", d => `translate(${d.y},${d.x})`)
                .append('circle')
                .attr("r", 10)
                .style("fill", "black");

            // Adding text to nodes
            svg.selectAll('g.node')
                .append("text")
                .attr("dy", ".35em")
                .attr("x", d => d.children ? -13 : 13)
                .style("text-anchor", d => d.children ? "end" : "start")
                .style("fill", "#555") // Set text color
                .style("font-family", "Arial") // Set font family
                .style("font-size", "12px") // Set font size
                .text(d => d.data.name);

            // Links
            svg.selectAll('path.link')
                .data(links)
                .enter().insert('path', "g")
                .attr("class", "link")
                .attr("d", linkPathGenerator)
                .style("stroke", "#ccc") // Set the color of the links
                .style("stroke-width", "2px") // Set the stroke width of the links
                .style("fill", "none");
        }
    }, [data]);

    return <Box ref={d3Container} />;
};


export default TreeChart