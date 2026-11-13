// Daftar ikon yang bisa dipakai lewat nama di file data/.
// Mau ikon baru? Cari di https://react-icons.github.io/react-icons lalu tambahkan di sini.
import {
  SiFlutter, SiDart, SiGo, SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiHtml5, SiCss, SiLaravel, SiPhp, SiKotlin, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiFirebase, SiSupabase, SiDocker, SiKubernetes, SiGit,
  SiLinux, SiGooglecloud, SiHuawei, SiFastapi, SiFlask, SiTensorflow, SiPytorch,
  SiOpencv, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiFigma, SiPostman, SiKaggle,
  SiDribbble, SiMedium, SiTiktok, SiYoutube, SiSqlite, SiGooglecolab, SiFramer,
  SiBootstrap, SiAndroidstudio,
} from "react-icons/si";
import {
  FaJava, FaAws, FaBrain, FaServer, FaDatabase, FaCloud, FaGlobe, FaLinkedin, FaGithub,
  FaInstagram, FaEnvelope, FaWhatsapp, FaFacebook, FaRobot, FaMicrochip, FaChartLine,
  FaPlug,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export const ICONS = {
  // bahasa & framework
  flutter: SiFlutter, dart: SiDart, go: SiGo, golang: SiGo, python: SiPython,
  javascript: SiJavascript, typescript: SiTypescript, react: SiReact, nextjs: SiNextdotjs,
  nodejs: SiNodedotjs, tailwind: SiTailwindcss, html: SiHtml5, css: SiCss, laravel: SiLaravel,
  php: SiPhp, java: FaJava, kotlin: SiKotlin, framer: SiFramer, bootstrap: SiBootstrap,
  fastapi: SiFastapi, flask: SiFlask, sql: FaDatabase, api: FaPlug,
  // basis data
  postgresql: SiPostgresql, mysql: SiMysql, sqlite: SiSqlite, mongodb: SiMongodb,
  redis: SiRedis, firebase: SiFirebase, supabase: SiSupabase, database: FaDatabase,
  // data & AI
  tensorflow: SiTensorflow, pytorch: SiPytorch, opencv: SiOpencv, pandas: SiPandas,
  numpy: SiNumpy, scikitlearn: SiScikitlearn, matplotlib: FaChartLine, jupyter: SiJupyter,
  colab: SiGooglecolab, ai: FaBrain, rag: FaRobot,
  // cloud & devops
  docker: SiDocker, kubernetes: SiKubernetes, linux: SiLinux, gcp: SiGooglecloud,
  aws: FaAws, huawei: SiHuawei, server: FaServer, cloud: FaCloud, iot: FaMicrochip,
  // tools
  git: SiGit, figma: SiFigma, postman: SiPostman, vscode: VscVscode,
  androidstudio: SiAndroidstudio,
  // sosial
  github: FaGithub, linkedin: FaLinkedin, instagram: FaInstagram, email: FaEnvelope,
  whatsapp: FaWhatsapp, youtube: SiYoutube, tiktok: SiTiktok, x: FaXTwitter,
  facebook: FaFacebook, medium: SiMedium, website: FaGlobe, kaggle: SiKaggle,
  dribbble: SiDribbble,
};

export default function Icon({ name, label = "", className = "" }) {
  const Cmp = ICONS[(name || "").toLowerCase()];
  if (Cmp) return <Cmp aria-hidden="true" className={className} />;
  return (
    <span aria-hidden="true" className={`inline-grid place-items-center font-display font-bold ${className}`}>
      {(label || name || "?").charAt(0).toUpperCase()}
    </span>
  );
}
