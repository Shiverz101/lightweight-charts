function generateCandle(i, target) {
	const step = (i % 20) / 5000;
	const base = i / 5;

	const sign = (i % 2) ? 1 : -1;
	target.open = base * (1 - sign * step);
	target.high = base * (1 + 4 * step);
	target.low = base * (1 - 4 * step);
	target.close = base * (1 + sign * step);
}

function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		const item = {
			time: time.getTime() / 1000,
		};
		time.setUTCDate(time.getUTCDate() + 1);

		generateCandle(i, item);
		res.push(item);
	}
	return res;
}

function generateDataLine(offset) {
	const colors = [
		'#013370',
		'#3a9656',
		undefined, // default color should be used
	];

	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: (offset || 0) + i,
			color: colors[i % colors.length],
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addBarSeries({
		borderColor: 'rgba(0, 0, 255, 0.2)',
		upColor: 'rgba(0, 80, 0, 0.4)',
		downColor: 'rgba(80, 0, 0, 0.4)',
		thinBars: false,
		priceScaleId: 'right',
	});

	mainSeries.setData(generateData());

	const lineSeires1 = chart.addLineSeries({
		lineWidth: 1,
		color: '#ff0000',
		priceLineWidth: 1,
		priceLineStyle: LightweightCharts.LineStyle.LargeDashed,
		priceScaleId: 'my_overlay',
	});

	lineSeires1.setData(generateDataLine());

	const lineSeires2 = chart.addLineSeries({
		lineWidth: 1,
		color: '#0000ff',
		priceLineWidth: 1,
		priceLineStyle: LightweightCharts.LineStyle.LargeDashed,
		priceScaleId: 'my_overlay',
	});

	lineSeires2.setData(generateDataLine(50));

	const lineSeires3 = chart.addLineSeries({
		lineWidth: 5,
		color: '#ff00ff',
		priceLineWidth: 1,
		priceLineStyle: LightweightCharts.LineStyle.LargeDashed,
		priceScaleId: 'my_overlay_2',
	});

	lineSeires3.setData(generateDataLine(90));

	const lineSeires4 = chart.addLineSeries({
		lineWidth: 5,
		color: '#00ffff',
		priceLineWidth: 1,
		priceLineStyle: LightweightCharts.LineStyle.LargeDashed,
		priceScaleId: 'my_overlay_2',
	});

	lineSeires4.setData(generateDataLine(160));
}