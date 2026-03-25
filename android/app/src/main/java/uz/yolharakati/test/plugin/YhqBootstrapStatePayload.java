package uz.yolharakati.test.plugin;

import com.getcapacitor.JSObject;

final class YhqBootstrapStatePayload {
    private YhqBootstrapStatePayload() {
    }

    static Snapshot create(
        String status,
        String code,
        String detailMessage,
        boolean isLoading,
        boolean isSuccess
    ) {
        return new Snapshot(status, !isLoading && !isSuccess, code, detailMessage);
    }

    static JSObject build(
        String status,
        String code,
        String detailMessage,
        boolean isLoading,
        boolean isSuccess
    ) {
        final Snapshot snapshot = create(status, code, detailMessage, isLoading, isSuccess);
        final JSObject data = new JSObject();
        data.put("status", snapshot.status);
        data.put("fatal", snapshot.fatal);

        if (snapshot.code != null) {
            data.put("code", snapshot.code);
        }
        if (snapshot.detailMessage != null) {
            data.put("detailMessage", snapshot.detailMessage);
        }
        return data;
    }

    static final class Snapshot {
        final String status;
        final boolean fatal;
        final String code;
        final String detailMessage;

        Snapshot(String status, boolean fatal, String code, String detailMessage) {
            this.status = status;
            this.fatal = fatal;
            this.code = code;
            this.detailMessage = detailMessage;
        }
    }
}
