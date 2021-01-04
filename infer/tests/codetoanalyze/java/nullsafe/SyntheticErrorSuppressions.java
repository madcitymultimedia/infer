/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package codetoanalyze.java.nullsafe;

import android.annotation.SuppressLint;
import javax.annotation.Nullable;

public class SyntheticErrorSuppressions {
  static class Fragment {
    @SuppressLint("eradicate-return-over-annotated")
    @Nullable
    public static Object getContext() {
      return new Object();
    }

    public static void setContext(final Object context) {}
  }

  static class ClassWithSyntheticCode {
    @Nullable private Object $ul_fieldNullable;
    private Object $ul_fieldNotNull;

    // This method contains $ which is *extremely* rarely used in user code, but
    // used extensively in autogenerated code, therefore is good marker.
    private static void $ul_iAmAutogen(
        final ClassWithSyntheticCode instance, final Object context) {}

    @Nullable
    private Object $ul_iAmNullableAutogen() {
      return $ul_fieldNullable;
    }

    public void passingIncorrectParamToSyntheticMethod_OK() {
      $ul_iAmAutogen(this, Fragment.getContext());
    }

    public void assigningAnythingToSyntheticField_OK() {
      $ul_fieldNotNull = null;
    }

    // Following cases are hard to support since synthetic code can be a part of
    // a complex expression, and we need some more sophisticated mechanisms to
    // handle that. On the bright side, this is not something that happens often
    // in the wild.

    public void passingSyntheticParamToAnyMethod_OK_FP() {
      Fragment.setContext($ul_fieldNullable);
    }

    public String dereferencingSyntheticNullableField_OK_FP() {
      return $ul_fieldNullable.toString();
    }

    public String dereferencingNullableSyntheticMethodCall_OK_FP() {
      return $ul_iAmNullableAutogen().toString();
    }
  }
}