export interface FullPageProps {
  whiteTitle?: string,
  greenTitle?: string,
  greenTitleFirst?: boolean,
  goBack?: boolean,
  onPressGoBack?: () => void,
  children: Element,
  footerMessage?: Element,
  buttons?: boolean,
  onlyOneButton?: boolean,
  buttonPrimary?: boolean,
  buttonSecondary?: boolean,
  onPressPrimary?: () => void,
  onPressSecondary?: () => void,
  buttonSecondaryTitle?: string,
  buttonPrimaryTitle?: string,
  verticalBounce?: boolean,
  }