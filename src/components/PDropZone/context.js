export const defaultAllowMultiple = true;

const DropZoneContextType = {
  disabled: Boolean,
  focused: Boolean,
  measuring: Boolean,
  allowMultiple: Boolean,
  size: String,
  type: String,
};

export const Context = {
  disabled: false,
  focused: false,
  size: 'extraLarge',
  type: 'file',
  measuring: false,
  allowMultiple: defaultAllowMultiple,
};

export function createAllowMultipleKey(allowMultiple) {
  return allowMultiple ? 'allowMultiple' : 'single';
}

export function capitalize(word = '') {
  const wordLower = word.toLowerCase();
  return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}

export function fileAccepted(file, accept) {
  return file.type === 'application/x-moz-file' || accepts(file, accept);
}

export function accepts(file, acceptedFiles) {
  if (file && acceptedFiles) {
    const fileName = file.name || '';
    const mimeType = file.type || '';
    const baseMimeType = mimeType.replace(/\/.*$/, '');
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (validType.startsWith('.')) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
}

export function isServer() {
  return typeof window === 'undefined' || typeof document === 'undefined';
}

const DropZoneEvent = [DragEvent, HTMLInputElement, Event];

const dragEvents = ['dragover', 'dragenter', 'drop'];

export function getDataTransferFiles(event) {
  if (isDragEvent(event) && event.dataTransfer) {
    const dt = event.dataTransfer;
    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    } else if (dt.items && dt.items.length) {
      // Chrome is the only browser that allows to read the file list on drag
      // events and uses `items` instead of `files` in this case.
      return Array.from(dt.items);
    }
  } else if (isChangeEvent(event) && (event.target).files) {
    // Return files from even when a file was selected from an upload dialog
    const target = event.target;
    return target.files;
  }

  return [];
}

function isDragEvent(event) {
  return dragEvents.indexOf(event.type) > 0;
}

function isChangeEvent(event) {
  return event.type === 'change';
}

export function useToggle(initialState) {
  let value = initialState;

  return {
    value,
    toggle: (value = !value) || [],
    setTrue: (value = true) || [],
    setFalse: (value = false) || [],
  };
}
