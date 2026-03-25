package uz.yolharakati.test.plugin;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class YhqBootstrapStatePayloadTest {
    @Test
    public void loadingStateIsNotFatal() {
        final YhqBootstrapStatePayload.Snapshot payload =
            YhqBootstrapStatePayload.create("loading", null, null, true, false);

        assertEquals("loading", payload.status);
        assertFalse(payload.fatal);
        assertNull(payload.code);
        assertNull(payload.detailMessage);
    }

    @Test
    public void readyStateIsNotFatal() {
        final YhqBootstrapStatePayload.Snapshot payload =
            YhqBootstrapStatePayload.create("ready", null, null, false, true);

        assertEquals("ready", payload.status);
        assertFalse(payload.fatal);
    }

    @Test
    public void errorStateIsFatalAndIncludesDetails() {
        final YhqBootstrapStatePayload.Snapshot payload = YhqBootstrapStatePayload.create(
            "error",
            "QUIZ_BOOTSTRAP_FAILED",
            "Secure quiz bootstrap failed",
            false,
            false
        );

        assertEquals("error", payload.status);
        assertTrue(payload.fatal);
        assertEquals("QUIZ_BOOTSTRAP_FAILED", payload.code);
        assertEquals("Secure quiz bootstrap failed", payload.detailMessage);
    }
}
