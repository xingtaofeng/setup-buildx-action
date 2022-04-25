import * as core from '@actions/core';

export const IsBuildxDefaultBuilder = !!process.env['STATE_isBuildxDefaultBuilder'];
export const IsPost = !!process.env['STATE_isPost'];
export const IsDebug = !!process.env['STATE_isDebug'];
export const builderName = process.env['STATE_builderName'] || '';
export const containerName = process.env['STATE_containerName'] || '';

export function setDebug(debug: string) {
  core.saveState('isDebug', debug);
}

export function setBuilderName(builderName: string) {
  core.saveState('builderName', builderName);
}

export function setBuildxIsDefaultBuilder(isBuildxDefaultBuilder: string) {
  core.saveState('isBuildxDefaultBuilder', isBuildxDefaultBuilder);
}

export function setContainerName(containerName: string) {
  core.saveState('containerName', containerName);
}

if (!IsPost) {
  core.saveState('isPost', 'true');
}
