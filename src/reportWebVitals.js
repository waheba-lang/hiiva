const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
\n getCLS(onPerfEntry);
\n getFID(onPerfEntry);
\n getFCP(onPerfEntry);
\n getLCP(onPerfEntry);
\n getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
