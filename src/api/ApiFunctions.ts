export const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzX2luIjoiMTk3MC0wMS0wMVQwMDowMDowMFoiLCJzZXJ2aWNlX25hbWUiOiJ0ZXN0In0.Gi8QZy-APTzsfXxIgCQ_MTAfNTbC7bhus9JNfjCraVI';

const FormatTelegramId = (telegramId: number): string => {
    return telegramId.toString().padStart(12, '0');
}

export default FormatTelegramId