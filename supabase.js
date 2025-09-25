import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
const TABLE = "prep_data";

export async function loadData() {
  let { data, error } = await supabase.from(TABLE).select("data").eq("id", 1).single();
  if (error || !data) {
    console.warn("No data found, returning null:", error);
    return null;
  }
  return data.data;
}

export async function saveData(payload) {
  const { error } = await supabase.from(TABLE).upsert({ id: 1, data: payload });
  if (error) console.error("Save error:", error);
}
