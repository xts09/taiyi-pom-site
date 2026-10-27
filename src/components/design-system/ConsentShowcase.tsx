"use client";

import { useState } from "react";
import { ConsentPreferencesPanel } from "@/components/AnalyticsConsent";
import type { AnalyticsMessages } from "@/i18n/types";
import type { LocalizedUrlSegment } from "@/i18n/config";

export function ConsentShowcase({ messages, localeSegment }: { messages: AnalyticsMessages; localeSegment?: LocalizedUrlSegment }) {
  const [result, setResult] = useState("尚未保存演示选择");
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible ? <ConsentPreferencesPanel
        placement="inline"
        messages={messages}
        onAcceptAll={() => setResult("演示选择：接受网站分析和广告衡量")}
        onRejectOptional={() => setResult("演示选择：拒绝可选 Cookie")}
        onDismiss={() => { setVisible(false); setResult("演示面板已关闭；未保存选择"); }}
        localeSegment={localeSegment}
      /> : <button type="button" onClick={() => setVisible(true)}>重新展示 Cookie 选择</button>}
      <p role="status">{result}。此示例不会更改 Cookie 同意或发送统计。</p>
    </div>
  );
}
