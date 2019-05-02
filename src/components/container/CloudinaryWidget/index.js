const defaultFunc = () => {};
const styles = {
  palette: {
    window: '#FFFFFF',
    sourceBg: '#FBFBFB',
    windowBorder: '#66008C',
    tabIcon: '#000000',
    inactiveTabIcon: '#0D2F5A',
    menuIcons: '#555a5f',
    link: '#66008C',
    action: '#339933',
    inProgress: '#0433ff',
    complete: '#339933',
    error: '#cc0000',
    textDark: '#000000',
    textLight: '#FFFFFF'
  },
};
/**
 * A class representing the Cloudinary widget
 *
 * @export
 * @class CloudinaryWidget
 */
export default class CloudinaryWidget {
  /**
   * Creates an instance of CloudinaryWidget.
   *
   * @param {Function} [handleSuccess=defaultFunc] The callback to execute on successful upload
   * @param {Function} [handleFailure=defaultFunc] The callback to execute on failed upload
   * @param {boolean} [cropping=false] If the widget should enforce cropping
   * @memberof CloudinaryWidget
   */
  constructor(
    handleSuccess = defaultFunc,
    handleFailure = defaultFunc,
    cropping = true,
  ) {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET || 'ml_default',
      cropping,
      croppingAspectRatio: cropping ? 1 : 0,
      croppingDefaultSelectionRatio: 0.8,
      resourceType: 'image',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
      folder: 'ireporter',
      tags: ['incidents'],
      maxImageWidth: 1600,
      maxImageHeight: 800,
      maxFiles: 4,
      maxFileSize: 1500000, // 1.5MB
      styles,
      sources: ['local', 'camera', 'facebook', 'instagram'],
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        const {
          original_filename: filename,
          format,
          secure_url: mediaUrl
        } = result.info;
        const originalFilename = `${filename}.${format}`;
        return handleSuccess(mediaUrl, originalFilename);
      }
      handleFailure();
    });
  }

  /**
   * Shows the widget
   * @memberof CloudinaryWidget
   * @returns {void}
   */
  open() {
    this.widget.open();
  }
}
