/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */

/**
 * API v4 Template Engine
 *
 * Note: This module is supported only with the Mozilla Rhino engine
 */
const repository = require("platform/v4/repository");

const REGISTRY_PUBLIC = "/registry/public/";
const MUSTACHE_FILE_EXTENSION = ".mustache";

exports.getDefaultEngine = function() {
	return exports.getVelocityEngine();
};

exports.getMustacheEngine = function() {
	const engine = org.eclipse.dirigible.api.v3.platform.TemplateEnginesFacade.getMustacheEngine();
	return new TemplateEngine(engine, "mustache");
};

exports.getVelocityEngine = function() {
	const engine = org.eclipse.dirigible.api.v3.platform.TemplateEnginesFacade.getVelocityEngine();
	return new TemplateEngine(engine, "velocity");
};

exports.getJavascriptEngine = function() {
	const engine = org.eclipse.dirigible.api.v3.platform.TemplateEnginesFacade.getJavascriptEngine();
	return new TemplateEngine(engine, "javascript");
};

exports.generate = function(template, parameters) {
	return exports.getDefaultEngine().generate(template, parameters);
};

exports.generateFromFile = function(location, parameters) {
	const resource = repository.getResource(REGISTRY_PUBLIC + location);
	if (resource.exists()) {
		const isMustacheTemplate = location.endsWith(MUSTACHE_FILE_EXTENSION);
		const engine = isMustacheTemplate ? exports.getMustacheEngine() : exports.getDefaultEngine();
		const template = resource.getText();
		return engine.generate(template, parameters);
	}
	return null;
};

function TemplateEngine(engine, type) {
	this.engine = engine;
	this.sm = type === "mustache" ? "{{" : null;
	this.em = type === "mustache" ? "}}" : null;

	this.generate = function(template, parameters) {
		return this.engine.generate(template, JSON.stringify(parameters), this.sm, this.em);
	};

	this.setSm = function(sm) {
		this.sm = sm;
	};

	this.setEm = function(em) {
		this.em = em;
	};
}
