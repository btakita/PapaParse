let createRequire;
try {
	createRequire = await import('module').then(module=>module.createRequire);
} catch (error) {}
export default createRequire ? createRequire(import.meta.url)('./papaparse.js') : undefined;
