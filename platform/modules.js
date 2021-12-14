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
exports.getLifecycle = function() {
	const lifecycle = require("platform/v4/lifecycle");
	return lifecycle;
};

exports.getRegistry = function() {
	const registry = require("platform/v4/registry");
	return registry;
};

exports.getRepository = function() {
	const repository = require("platform/v4/repository");
	return repository;
};

exports.getWorkspace = function() {
	const workspace = require("platform/v4/workspace");
	return workspace;
};

exports.getEngines = function() {
	const engines = require("platform/v4/engines");
	return engines;
};

exports.getTemplateEngines = function() {
	const templateEngines = require("platform/v4/template-engines");
	return templateEngines;
};
