
import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';

 

export function MostOrderedProductsChart({data}) {

    const chartRef = useRef(null);

 

    useEffect(() => {

      if (chartRef && chartRef.current) {

        const ctx = chartRef.current.getContext('2d');

        let myChart = null;

 

        if (data.length > 0) {

          const labels = data.map(item => item.productName);

          const quantities = data.map(item => item.quantitySold);

 

          if (chartRef.current.chart) {

            chartRef.current.chart.destroy();

          }

 

          myChart = new Chart(ctx, {

            type: 'bar',

            data: {

              labels: labels,

              datasets: [{

                label: 'Quantidade Vendida',

                data: quantities,

                backgroundColor: '#f2a61f',

                borderColor: '#f2a61f',

                borderWidth: 1

              }]

            },

            options: {

              indexAxis: 'y',

              responsive: true,

              plugins: {

                title: {

                  display: true,

                  text: 'Produtos Mais Vendidos'

                },

                legend: {

                  display: false

                }

              },

              scales: {

                x: {

                  beginAtZero: true,

                  title: {

                    display: true,

                    text: 'Quantidade'

                  }

                },

                y: {

                  title: {

                    display: true,

                    text: 'Produtos'

                  }

                }

              }

            }

          });

        }

 

        chartRef.current.chart = myChart;

      }

    }, [data]);

 

    return (

      <div>

        <canvas ref={chartRef} width="400px" height="200px"></canvas>

      </div>

    );

}



