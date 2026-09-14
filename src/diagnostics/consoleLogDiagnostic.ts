import * as vscode from 'vscode';

function isSupportedDocument(
  document: vscode.TextDocument
): boolean {
  return [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
  ].includes(document.languageId);
}

export function consoleLogDiagnostic(collection: vscode.DiagnosticCollection): void {

}