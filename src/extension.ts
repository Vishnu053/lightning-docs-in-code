import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('lightning-docs-in-code.openLightningJS', () => {
        const panel = vscode.window.createWebviewPanel(
            'lightningjs',
            'LightningJS',
            vscode.ViewColumn.Two,
            {}
        );

        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en" style="height:100%">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LightningJS</title>
    </head>
    <body style="height:100%">
        <iframe src="https://lightningjs.io/" width="100%" height="100%" frameborder="0"></iframe>
    </body>
    </html>`;
}

export function deactivate() {}
