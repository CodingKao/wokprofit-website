export const DEMO_EMAIL = "demo@wokprofit.com";
export const DEMO_PASSWORD = "ProfitDemo2026";

const SESSION_KEY = "wokprofit-demo-session";

export const createDemoSession = () => {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      email: DEMO_EMAIL,
      restaurant: "Thai Garden Kitchen",
      signedInAt: new Date().toISOString(),
    })
  );
};

export const clearDemoSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const hasDemoSession = () => {
  try {
    return Boolean(localStorage.getItem(SESSION_KEY));
  } catch {
    return false;
  }
};
