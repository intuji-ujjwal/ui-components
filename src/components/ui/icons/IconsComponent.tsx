import React from 'react';
import { IconCheck } from './regular/check';
import { IconClose } from './regular/close';
import { getIconSize, sizeType } from './iconProps';
import { IconHide } from './regular/Hide';
import { IconArrowLeft } from './regular/arrowLeft';
import { IconArrowRight } from './regular/arrowRight';
import { IconHeadset } from './regular/headset';
import { IconQuestion } from './regular/questions';
import { IconBuilding } from './regular/building';
import { IconUser } from './regular/user';
import { IconCheckCircle } from './regular/checkCircle';
import { IconSearch } from './regular/search';
import { IconChevronRight } from './regular/chevronRight';
import { IconCart } from './regular/cart';
import { IconChat } from './regular/chat';
import { IconNotification } from './regular/notification';
import { IconTrenUp } from './regular/trendUp';
import { IconTrendDown } from './regular/trendDown';
import { IconArrowUp } from './regular/arrowUp';
import { IconArrowsDown } from './regular/arrowsDown';
import { IconArrowDownUp } from './regular/arrowsDownUp-';
import { IconStack } from './regular/stack';
import { IconArrowLineLeft } from './regular/arrowLineLeft';
import { IconArrowLineRight } from './regular/arrowLineRight';
import { IconDotsThreeVertical } from './regular/dotsThreeVertical';
import { IconSidebarExpand } from './regular/sidebarExpand';
import { IconSortAscending } from './regular/sortAscending';
import { IconSortDescending } from './regular/sortDescending';
import { IconEdit } from './regular/edit';
import { IconChevronUp } from './regular/chevronUp';
import { IconAdd } from './regular/add';
import { IconAddCircle } from './regular/addCircle';
import { IconExport } from './regular/export';
import { IconUserThree } from './regular/userThree';
import { IconIdCard } from './regular/idCard';
import { IconDotsThree } from './regular/dotsThree';
import { IconFilter } from './regular/filter';
import { IconTrash } from './regular/trash';
import { IconUpload } from './regular/upload';
import { IconCrown } from './regular/crown';
import { IconCompare } from './regular/compare';
import { IconHeart } from './regular/heart';
import { IconPdf } from './regular/pdf';
import { IconLink } from './regular/link';
import { IconSidebarCollapsed } from './regular/sidebarCollapsed';
import { IconRuler } from './regular/ruler';
import { IconMinus } from './regular/minus';
import { IconArrowCounterClockwise } from './regular/arrowCounterClockwise';
import { IconReset } from './regular/reset';
import { IconMapIn } from './regular/mapIn';
import { IconPhone } from './regular/phone';
import { IconImage } from './regular/image';
import { IconThumb } from './regular/thumb';
import { IconList } from './regular/list';
import { IconSquaresFour } from './regular/squaresFour';
import { IconFileArrowDown } from './regular/fileArrowDown';
import { IconListMagnifyingGlass } from './regular/listMagnifyingGlass';
import { IconDownloadSimple } from './regular/downloadSimple';
import { IconPrinter } from './regular/printer';
import { IconBuildingOffice } from './regular/buildingOffice';
import { IconEnvelopeSimple } from './regular/envelopeSimple';
import { IconMapPinArea } from './regular/mapPinArea';
import { IconPencilSimple } from './regular/pencilSimple';
import { IconReceipt } from './regular/receipt';
import { IconCalendarBlank } from './regular/calendarBlank';
import { IconFileText } from './regular/fileText';
import { IconPaperClip } from './regular/paperClip';
import { IconSpinner } from './regular/spinner';
import { IconMagicWand } from './regular/magicWand';
import { IconChatCircleDots } from './regular/chatCircleDots';
import { IconSmartPhone } from './regular/smartPhone';
import { IconEnvelope } from './regular/envelope';
import { IconCopy } from './regular/copy';
import { IconShipment } from './regular/shipment';
import { IconCaretUpDown } from './fill/caretUpDown';
import { IconXls } from './fill/xls';
import { IconChecklist } from './fill/checklist';
import { IconColorSwatch } from './fill/ColorSwatch';
import { IconCube } from './fill/cube';
import { IconDispatched } from './fill/dispatched';
import { IconError } from './fill/error';
import { IconFilePdf } from './fill/filePdf';
import { IconFilePng } from './fill/filePng';
import { IconFlag } from './fill/flag';
import { IconGear } from './fill/gear';
import { IconHappy } from './fill/happy';
import { IconInfo } from './fill/Info';
import { IconLeader } from './fill/leader';
import { IconLogout } from './fill/logout';
import { IconMarkettingResources } from './fill/markettingResources';
import { IconOrderConfirmation } from './fill/orderConfirmation';
import { IconOrderPicked } from './fill/orderPicked';
import { IconOrderProcessing } from './fill/orderProcessing';
import { IconOrderReceived } from './fill/orderReceived';
import { IconOrders } from './fill/orders';
import { IconOverview } from './fill/overview';
import { IconPaperPlaneRight } from './fill/paperPlaneRight';
import { IconPoint } from './fill/point';
import { IconProduct } from './fill/product';
import { IconRealTimeStock } from './fill/realtimeStock';
import { IconResources } from './fill/resources';
import { IconSetting } from './fill/setting';
import { IconSidebar } from './fill/sidebar';
import { IconSparkle } from './fill/sparkle';
import { IconStar } from './fill/star';
import { IconStock } from './fill/stock';
import { IconSupport } from './fill/support';
import { IconUsers } from './fill/users';
import { IconWarehouse } from './fill/warehouse';
import { IconWarning } from './fill/warning';
import { IconWebsite } from './fill/website';
import { IconUserCircle } from './fill/userCircle';

export const icons = {
  'reg-check': IconCheck,
  'reg-close': IconClose,
  'reg-hide': IconHide,
  'reg-arrow-left': IconArrowLeft,
  'reg-arrow-right': IconArrowRight,
  'reg-headset': IconHeadset,
  'reg-question': IconQuestion,
  'reg-building': IconBuilding,
  'reg-user': IconUser,
  'reg-check-circle': IconCheckCircle,
  'reg-chevron-right': IconChevronRight,
  'reg-search': IconSearch,
  'reg-cart': IconCart,
  'reg-chat': IconChat,
  'reg-notification': IconNotification,
  'reg-trend-up': IconTrenUp,
  'reg-trend-down': IconTrendDown,
  'reg-arrows-up': IconArrowUp,
  'reg-arrows-down-up': IconArrowDownUp,
  'reg-arrows-down': IconArrowsDown,
  'reg-arrow-line-left': IconArrowLineLeft,
  'reg-arrow-line-right': IconArrowLineRight,
  'reg-dots-three-vertical': IconDotsThreeVertical,
  'reg-sidebar-expand': IconSidebarExpand,
  'reg-sort-ascending': IconSortAscending,
  'reg-sort-descending': IconSortDescending,
  'reg-edit': IconEdit,
  'reg-chevron-up': IconChevronUp,
  'reg-add': IconAdd,
  'reg-add-circle': IconAddCircle,
  'reg-export': IconExport,
  'reg-user-three': IconUserThree,
  'reg-id-card': IconIdCard,
  'reg-dots-three': IconDotsThree,
  'reg-filter': IconFilter,
  'reg-trash': IconTrash,
  'reg-upload': IconUpload,
  'reg-crown': IconCrown,
  'reg-compare': IconCompare,
  'reg-heart': IconHeart,
  'reg-pdf': IconPdf,
  'reg-stack': IconStack,
  'reg-link': IconLink,
  'reg-sidebar-collapsed': IconSidebarCollapsed,
  'reg-ruler': IconRuler,
  'reg-minus': IconMinus,
  'reg-arrow-counter-clockwise': IconArrowCounterClockwise,
  'reg-reset': IconReset,
  'reg-map-in': IconMapIn,
  'reg-phone': IconPhone,
  'reg-image': IconImage,
  'reg-thumb': IconThumb,
  'reg-list': IconList,
  'reg-squares-four': IconSquaresFour,
  'reg-list-magnifying-glass': IconListMagnifyingGlass,
  'reg-file-arrow-down': IconFileArrowDown,
  'reg-download-simple': IconDownloadSimple,
  'reg-printer': IconPrinter,
  'reg-building-office': IconBuildingOffice,
  'reg-envelope-simple': IconEnvelopeSimple,
  'reg-map-pin-area': IconMapPinArea,
  'reg-pencil-simple': IconPencilSimple,
  'reg-receipt': IconReceipt,
  'reg-calendar-blank': IconCalendarBlank,
  'reg-file-text': IconFileText,
  'reg-paperclip': IconPaperClip,
  'reg-spinner': IconSpinner,
  'reg-magic-wand': IconMagicWand,
  'reg-chat-circle-dots': IconChatCircleDots,
  'reg-smartphone': IconSmartPhone,
  'reg-envelope': IconEnvelope,
  'reg-shipment': IconShipment,
  'reg-copy': IconCopy,
  'fill-carret-up-down': IconCaretUpDown,
  'fill-cart': IconCart,
  'fill-chat': IconChat,
  'fill-check-circle': IconCheckCircle,
  'fill-checkList': IconChecklist,
  'fill-color-swatch': IconColorSwatch,
  'fill-compare': IconCompare,
  'fill-cube': IconCube,
  'fill-dispatched': IconDispatched,
  'fill-error': IconError,
  'fill-file-pdf': IconFilePdf,
  'fill-file-png': IconFilePng,
  'fill-flag': IconFlag,
  'fill-gear': IconGear,
  'fill-happy': IconHappy,
  'fill-info': IconInfo,
  'fill-leader': IconLeader,
  'fill-logout': IconLogout,
  'fill-marketing-resources': IconMarkettingResources,
  'fill-notifications': IconNotification,
  'fill-order-confirmation': IconOrderConfirmation,
  'fill-order-picked': IconOrderPicked,
  'fill-order-processing': IconOrderProcessing,
  'fill-order-received': IconOrderReceived,
  'fill-orders': IconOrders,
  'fill-overview': IconOverview,
  'fill-paper-plane-right': IconPaperPlaneRight,
  'fill-point': IconPoint,
  'fill-product': IconProduct,
  'fill-question': IconQuestion,
  'fill-realtime-stock': IconRealTimeStock,
  'fill-receipt': IconReceipt,
  'fill-resources': IconResources,
  'fill-setting': IconSetting,
  'fill-sidebar': IconSidebar,
  'fill-sparkle': IconSparkle,
  'fill-star': IconStar,
  'fill-stock': IconStock,
  'fill-support': IconSupport,
  'fill-user': IconUser,
  'fill-user-circle': IconUserCircle,
  'fill-users': IconUsers,
  'fill-warehouse': IconWarehouse,
  'fill-warning': IconWarning,
  'fill-website': IconWebsite,
  'fill-xls': IconXls,
};
export interface IconProps {
  fill?: string;
  size?: sizeType;
  icon: keyof typeof icons;
}

function IconsComponent({ icon, fill, size }: IconProps): React.ReactNode {
  const sizes = size ? getIconSize(size) : 24;
  const Component = icons[icon];

  if (!Component) {
    return null;
  }

  return (
    <Component
      fill={fill || '#000000'}
      size={sizes}
    />
  );
}

export default IconsComponent;
