
d3.csv('assets/data/data.csv').then(data => {

    var width = parseInt(d3.select('#scatter').style('width'));
    var height = width - width/3.9;
    var margin = 20;
    var labelArea = 110;
    var padBot = 40;
    var padLeft = 40;
    var leftTextX = margin + padLeft;
    var leftTextY = (height+labelArea)/2-labelArea;
    var curX = 'poverty';
    var curY = 'obesity';
    var xMin;
    var xMax;
    var yMin;
    var yMax;

    var svg = d3.select('#scatter').append('svg');

    svg
        .style('background','blue')
        .style('width',width)
        .style('height',height)
        .attr('class','chart')

    svg.append('g').attr('class','xText');
    var xText = d3.select('.xText');

    xText
        .append('text')
        .text('In Poverty (%)')
        .attr('y',-26)
        .attr('data-name','poverty')
        .attr('data-axis','x')
        .attr('class','aText active x')
        .attr('transform', `translate(${((width - labelArea)/2 + labelArea)}, ${height - margin - padBot})`);
    xText
        .append('text')
        .text('Age (Median')
        .attr('y',0)
        .attr('data-name','age')
        .attr('data-axis','x')
        .attr('class','aText inactive x')
        .attr('transform', `translate(${((width - labelArea)/2 + labelArea)}, ${height - margin - padBot})`);
    
    xText
        .append('text')
        .text('Household Income (Median)')
        .attr('y',26)
        .attr('data-name','age')
        .attr('data-axis','x')
        .attr('class','aText inactive x')
        .attr('transform', `translate(${((width - labelArea)/2 + labelArea)}, ${height - margin - padBot})`);
    
    
    svg.append('g').attr('class','yText');
    var yText = d3.select('.yText');

    yText
        .append('text')
        .text('Obese (%)')
        .attr('y',-26)
        .attr('data-name','obesity')
        .attr('data-axis','y')
        .attr('class','aText active y')
        .attr('transform', `translate(${leftTextX},${leftTextY})rotate(-90)`);
    yText
        .append('text')
        .text('Smokes (%)')
        .attr('y',0)
        .attr('data-name','smokes')
        .attr('data-axis','y')
        .attr('class','aText inactive y')
        .attr('transform', `translate(${leftTextX},${leftTextY})rotate(-90)`);
    
    yText
        .append('text')
        .text('Lacks Healthcare (%)')
        .attr('y',26)
        .attr('data-name','healthcare')
        .attr('data-axis','y')
        .attr('class','aText inactive y')
        .attr('transform', `translate(${leftTextX},${leftTextY})rotate(-90)`);
    
    function xMinMax() {
        xMin = d3.min(data, d => parseFloat(d[curX]) * 0.9);
        xMax = d3.max(data, d => parseFloat(d[curX]) * 1.1);
    };
    
    function yMinMax() {
        yMin = d3.min(data, d => parseFloat(d[curY]) * 0.9);
        yMax = d3.max(data, d => parseFloat(d[curY]) * 1.1);
    };

    xMinMax();
    yMinMax();

    function labelChange(axis, clickedText) {
        d3
            .selectAll('.aText')
            .filter('.' + axis)
            .filter('.active')
            .classed('active', false)
            .classed('inactive',true)

        // clickedText
        //     .classed()
    }
    
    
    

});
