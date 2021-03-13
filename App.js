module.exports = () => {
var data = [];
for(var key in process.env) data.push(`${key}=${process.env[key]}`)
return data.sort().join('\n')
}