
export const inputCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

/* fallback */
@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }
  
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .component-container {
    display: flex;
    flex-direction: column-reverse;
  }

  p {
    display: none;
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: #828282;
    margin-top: 4px;
  }

  label {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #333333;
    margin-bottom: 4px;
  }

  input {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border: 1px solid #828282;
    border-radius: 8px;
    width: 200px;
    height: 56px;
    box-sizing: border-box;
  }
  
  :host(:focus-within) label{
    color: #2962FF;
  }

  :host(:focus-within) input {
    border-color: #2962FF;
  }

  label:hover, label:active, input:hover+label, input:active+label, input:hover {
    color: #333333;
    border-color: #333333;
  }

  .labelError {
    color: #D32F2F;
  }

  .inputError {
    border-color: #D32F2F;
  }

  :host(:focus-within) .labelError, .pError {
    color: #D32F2F;
  }
  
  :host(:focus-within) .inputError {
    border-color: #D32F2F;
  }
  
`