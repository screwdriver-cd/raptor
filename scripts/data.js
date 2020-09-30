function setUpMetricQueryData1(context, events, done) {
    const now = new Date();
    const endTime = now.toISOString();
    
    now.setDate(now.getDate() -7);
    const startTime = now.toISOString()
    
    context.vars['endTime1'] = endTime;
    context.vars['startTime1'] = startTime;
    
    return done();
}

function setUpMetricQueryData2(context, events, done) {
    const now = new Date();
    const endTime = now.toISOString();
    
    now.setDate(now.getDate() - 31);
    const startTime = now.toISOString()
    
    context.vars['endTime2'] = endTime;
    context.vars['startTime2'] = startTime;
    
    return done();
}

module.exports = {
    setUpMetricQueryData1: setUpMetricQueryData1,
    setUpMetricQueryData2: setUpMetricQueryData2
  }