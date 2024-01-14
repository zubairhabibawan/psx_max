<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors

const statisticsVertical = [
  {
    title: 'Subscribers Gained',
    color: 'primary',
    icon: 'tabler-users',
    stats: '92.6k',
    height: 90,
    series: [{
      data: [
        200,
        60,
        300,
        140,
        230,
        120,
        400,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Quarterly Sales',
    color: 'error',
    icon: 'tabler-shopping-cart',
    stats: '36.5%',
    height: 90,
    series: [{
      data: [
        200,
        300,
        160,
        250,
        130,
        400,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.error],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Order Received',
    color: 'warning',
    icon: 'tabler-box',
    stats: '97.5k',
    height: 90,
    series: [{
      data: [
        350,
        500,
        310,
        460,
        280,
        400,
        300,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.warning],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Revenue Generated',
    color: 'success',
    icon: 'tabler-credit-card',
    stats: '97.5k',
    height: 90,
    series: [{
      data: [
        300,
        350,
        330,
        380,
        340,
        400,
        380,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        parentHeightOffset: 0,
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.success],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
]
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Horizontal Cards -->
    <VCol
      v-for="statistics in statisticsVertical"
      :key="statistics.title"
      cols="12"
      sm="6"
      md="2"
    >
      <CardStatisticsVertical v-bind="statistics" />
    </VCol>
  </VRow>
</template>
